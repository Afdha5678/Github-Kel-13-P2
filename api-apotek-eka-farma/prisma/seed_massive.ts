import { prisma } from '../src/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

async function main() {
    console.log('1. Fetching existing suppliers and medicines...');
    
    // Add 5 more suppliers
    const supplierNames = [
        "PT. Kimia Farma Trading", "PT. Anugerah Pharmindo", "PT. Mensa Binasukses", 
        "PT. Antarmitra Sembada", "PT. Dosni Roha"
    ];
    
    for (const name of supplierNames) {
        await prisma.supplier.create({
            data: {
                nama: name,
                telepon: "0812" + Math.floor(10000000 + Math.random() * 90000000),
                alamat: "Jl. Industri Obat No. " + Math.floor(Math.random() * 100)
            }
        });
    }
    console.log('Added 5 new suppliers.');

    const suppliers = await prisma.supplier.findMany();
    const obats = await prisma.obat.findMany();

    if (obats.length === 0 || suppliers.length === 0) {
        console.log('Need at least 1 obat and 1 supplier to generate data.');
        return;
    }

    console.log('2. Generating massive Pembelian (Purchases)...');
    
    // Generate 30 purchases over the last 30 days
    const now = new Date();
    for (let i = 0; i < 30; i++) {
        const purchaseDate = new Date();
        purchaseDate.setDate(now.getDate() - Math.floor(Math.random() * 30));
        
        const randomSupplier = suppliers[Math.floor(Math.random() * suppliers.length)];
        
        // Pick 2-5 random medicines
        const numItems = 2 + Math.floor(Math.random() * 4);
        const selectedObats = [];
        for(let j=0; j<numItems; j++) {
            selectedObats.push(obats[Math.floor(Math.random() * obats.length)]);
        }
        
        const pembelian = await prisma.transaksiPembelian.create({
            data: {
                supplierId: randomSupplier.id,
                tanggal: purchaseDate,
                status: 'COMPLETED',
                details: {
                    create: selectedObats.map(obat => {
                        const qty = 50 + Math.floor(Math.random() * 50);
                        return {
                            obatId: obat.id,
                            quantityOrdered: qty,
                            quantityReceived: qty
                        };
                    })
                }
            },
            include: { details: true }
        });
        
        for (const detail of pembelian.details) {
            // Create stock
            const expiry = new Date();
            expiry.setFullYear(expiry.getFullYear() + 1 + Math.floor(Math.random() * 2));
            
            await prisma.stok.create({
                data: {
                    obatId: detail.obatId,
                    jumlah: detail.quantityReceived,
                    tanggalKedaluwarsa: expiry
                }
            });
        }
    }
    console.log('Added 30 purchase transactions with stock.');

    console.log('3. Generating massive Penjualan (Sales)...');
    
    // Generate 100 sales over the last 30 days
    for (let i = 0; i < 100; i++) {
        const saleDate = new Date();
        saleDate.setDate(now.getDate() - Math.floor(Math.random() * 30));
        
        // Pick 1-4 random medicines
        const numItems = 1 + Math.floor(Math.random() * 3);
        const selectedObats = [];
        for(let j=0; j<numItems; j++) {
            selectedObats.push(obats[Math.floor(Math.random() * obats.length)]);
        }
        
        let total = 0;
        const detailsData = [];
        
        for (const obat of selectedObats) {
            const qty = 1 + Math.floor(Math.random() * 5);
            // Check stock
            const stocks = await prisma.stok.findMany({
                where: { obatId: obat.id, jumlah: { gt: 0 } },
                orderBy: { tanggalKedaluwarsa: 'asc' }
            });
            
            let remainingQty = qty;
            for (const stock of stocks) {
                if (remainingQty <= 0) break;
                
                const deduct = Math.min(remainingQty, stock.jumlah);
                await prisma.stok.update({
                    where: { id: stock.id },
                    data: { jumlah: stock.jumlah - deduct }
                });
                remainingQty -= deduct;
            }
            
            if (remainingQty < qty) { // if we managed to deduct some
                const actualQty = qty - remainingQty;
                detailsData.push({
                    obatId: obat.id,
                    quantity: actualQty,
                    harga: obat.hargaJual
                });
                total += actualQty * obat.hargaJual;
            }
        }
        
        if (detailsData.length > 0) {
            await prisma.transaksiPenjualan.create({
                data: {
                    tanggal: saleDate,
                    total: total,
                    details: {
                        create: detailsData
                    }
                }
            });
        }
    }
    console.log('Added up to 100 sales transactions (depending on stock).');

    console.log('✅ Selesai memperbanyak data!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
