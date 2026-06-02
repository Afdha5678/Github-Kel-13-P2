import { prisma } from '../src/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

async function main() {
    console.log('1. Clearing old transactions and stock...');
    await prisma.detailPenjualan.deleteMany();
    await prisma.transaksiPenjualan.deleteMany();
    await prisma.detailPembelian.deleteMany();
    await prisma.transaksiPembelian.deleteMany();
    await prisma.stockMovement.deleteMany();
    await prisma.stok.deleteMany();
    await prisma.supplier.deleteMany();

    console.log('2. Generating exactly 30 Suppliers...');
    for (let i = 1; i <= 30; i++) {
        await prisma.supplier.create({
            data: {
                nama: `PT. Supplier Laporan ${i}`,
                telepon: "0812" + Math.floor(10000000 + Math.random() * 90000000),
                alamat: "Jl. Data Sempurna No. " + i
            }
        });
    }
    const suppliers = await prisma.supplier.findMany();
    const obats = await prisma.obat.findMany();

    if (obats.length === 0) {
        console.log('Obat is empty!');
        return;
    }

    console.log('3. Generating exactly 20 Pembelian (Purchases) spread over 30 days...');
    const now = new Date();
    for (let i = 0; i < 20; i++) {
        const purchaseDate = new Date();
        purchaseDate.setDate(now.getDate() - (i % 30)); // Spread perfectly over last 30 days
        
        const randomSupplier = suppliers[i % suppliers.length];
        
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

    console.log('4. Generating exactly 20 Penjualan (Sales) spread over 30 days...');
    for (let i = 0; i < 20; i++) {
        const saleDate = new Date();
        saleDate.setDate(now.getDate() - (i % 30)); 
        
        const numItems = 1 + Math.floor(Math.random() * 3);
        const selectedObats = [];
        for(let j=0; j<numItems; j++) {
            selectedObats.push(obats[Math.floor(Math.random() * obats.length)]);
        }
        
        let total = 0;
        const detailsData = [];
        
        for (const obat of selectedObats) {
            const qty = 1 + Math.floor(Math.random() * 5);
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
            
            if (remainingQty < qty) {
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
    
    console.log('✅ Semua data lokal telah dirapikan menjadi EXACT 20 pembelian, 20 penjualan, 30 supplier dengan histori grafik penuh!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
