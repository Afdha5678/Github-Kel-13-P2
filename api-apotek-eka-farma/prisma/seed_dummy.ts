import { prisma } from '../src/lib/prisma';
import bcrypt from 'bcrypt';

async function main() {
    console.log('Menghapus data lama...');
    await prisma.detailPenjualan.deleteMany();
    await prisma.transaksiPenjualan.deleteMany();
    await prisma.detailPembelian.deleteMany();
    await prisma.transaksiPembelian.deleteMany();
    await prisma.stockMovement.deleteMany();
    await prisma.stok.deleteMany();
    await prisma.obat.deleteMany();
    await prisma.supplier.deleteMany();
    await prisma.user.deleteMany();

    console.log('Menambahkan User Owner...');
    const hashedPassword = await bcrypt.hash('owner123', 10);
    await prisma.user.create({
        data: {
            nama: 'Owner Apotek',
            email: 'owner@apotek.com',
            password: hashedPassword,
            role: 'OWNER',
        }
    });

    console.log('Menambahkan Supplier...');
    const suppliers = await Promise.all([
        prisma.supplier.create({ data: { nama: 'PT. Kimia Farma', alamat: 'Jl. Veteran No 1, Jakarta', telepon: '081234567890' } }),
        prisma.supplier.create({ data: { nama: 'PT. Kalbe Farma', alamat: 'Jl. Letjen Suprapto, Jakarta', telepon: '081234567891' } }),
        prisma.supplier.create({ data: { nama: 'PT. Sanbe Farma', alamat: 'Jl. Pasteur No 23, Bandung', telepon: '081234567892' } }),
        prisma.supplier.create({ data: { nama: 'PT. Dexa Medica', alamat: 'Jl. Rungkut Industri, Surabaya', telepon: '081234567893' } }),
        prisma.supplier.create({ data: { nama: 'PT. Phapros', alamat: 'Jl. Simongan, Semarang', telepon: '081234567894' } }),
    ]);

    console.log('Menambahkan 20 Obat...');
    const obatData = [
        { nama: 'Paracetamol 500mg', hargaJual: 5000, satuan: 'Strip', lokasiRak: 'A1', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Amoxicillin 500mg', hargaJual: 7500, satuan: 'Strip', lokasiRak: 'A2', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Sanmol Syrup 60ml', hargaJual: 15000, satuan: 'Botol', lokasiRak: 'B1', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Mylanta Syrup 150ml', hargaJual: 45000, satuan: 'Botol', lokasiRak: 'B2', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Vitamin C IPI', hargaJual: 6000, satuan: 'Botol', lokasiRak: 'C1', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Tolak Angin Cair', hargaJual: 3500, satuan: 'Sachet', lokasiRak: 'C2', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Antangin JRG', hargaJual: 3500, satuan: 'Sachet', lokasiRak: 'C3', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Promag Tablet', hargaJual: 8000, satuan: 'Strip', lokasiRak: 'A3', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Panadol Extra', hargaJual: 12000, satuan: 'Strip', lokasiRak: 'A4', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Betadine 15ml', hargaJual: 15000, satuan: 'Botol', lokasiRak: 'D1', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Oskadon', hargaJual: 4000, satuan: 'Strip', lokasiRak: 'A5', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Decolgen', hargaJual: 3000, satuan: 'Strip', lokasiRak: 'A6', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Bodrexin Syrup', hargaJual: 12000, satuan: 'Botol', lokasiRak: 'B3', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'OBH Combi Plus 60ml', hargaJual: 18000, satuan: 'Botol', lokasiRak: 'B4', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Woods Peppermint', hargaJual: 25000, satuan: 'Botol', lokasiRak: 'B5', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Insto Reguler 7.5ml', hargaJual: 14000, satuan: 'Botol', lokasiRak: 'D2', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Rohto Cool 7ml', hargaJual: 16000, satuan: 'Botol', lokasiRak: 'D3', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Hansaplast Plester', hargaJual: 5000, satuan: 'Pack', lokasiRak: 'E1', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80' },
        { nama: 'Minyak Kayu Putih 60ml', hargaJual: 22000, satuan: 'Botol', lokasiRak: 'E2', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' },
        { nama: 'Minyak Telon 60ml', hargaJual: 20000, satuan: 'Botol', lokasiRak: 'E3', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&q=80' }
    ];

    const obats = [];
    for (const data of obatData) {
        const obat = await prisma.obat.create({ data });
        obats.push(obat);

        // Tambah stok awal 50 untuk setiap obat
        const stok = await prisma.stok.create({
            data: {
                jumlah: 50,
                obatId: obat.id,
                tanggalKedaluwarsa: new Date(new Date().setFullYear(new Date().getFullYear() + 2))
            }
        });

        await prisma.stockMovement.create({
            data: {
                type: 'IN',
                quantity: 50,
                stokId: stok.id
            }
        });
    }

    console.log('Menambahkan Data Transaksi Pembelian...');
    for (let i = 0; i < 5; i++) {
        await prisma.transaksiPembelian.create({
            data: {
                status: 'COMPLETED',
                supplierId: suppliers[i].id,
                details: {
                    create: [
                        { obatId: obats[i * 4].id, quantityOrdered: 50, quantityReceived: 50 },
                        { obatId: obats[i * 4 + 1].id, quantityOrdered: 50, quantityReceived: 50 }
                    ]
                }
            }
        });
    }

    console.log('Menambahkan Data Transaksi Penjualan...');
    for (let i = 0; i < 5; i++) {
        const obat1 = obats[i * 2];
        const obat2 = obats[i * 2 + 1];
        const qty1 = 2;
        const qty2 = 1;

        await prisma.transaksiPenjualan.create({
            data: {
                total: obat1.hargaJual * qty1 + obat2.hargaJual * qty2,
                details: {
                    create: [
                        { obatId: obat1.id, quantity: qty1, harga: obat1.hargaJual },
                        { obatId: obat2.id, quantity: qty2, harga: obat2.hargaJual }
                    ]
                }
            }
        });
        
        // Kurangi stok karena penjualan
        const stok1 = await prisma.stok.findFirst({ where: { obatId: obat1.id } });
        const stok2 = await prisma.stok.findFirst({ where: { obatId: obat2.id } });
        
        if (stok1) {
            await prisma.stok.update({ where: { id: stok1.id }, data: { jumlah: stok1.jumlah - qty1 } });
            await prisma.stockMovement.create({ data: { type: 'OUT', quantity: qty1, stokId: stok1.id }});
        }
        if (stok2) {
            await prisma.stok.update({ where: { id: stok2.id }, data: { jumlah: stok2.jumlah - qty2 } });
            await prisma.stockMovement.create({ data: { type: 'OUT', quantity: qty2, stokId: stok2.id }});
        }
    }

    console.log('✅ Seeding berhasil! Data dummy lengkap telah ditambahkan.');
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
