import { prisma } from '@/lib/prisma';

export const createPenjualanService = async (data: any) => {
    // Gunakan Prisma Transaction karena kita melakukan insert transaksi, insert detail, dan memotong stok
    return await prisma.$transaction(async (tx) => {
        const now = new Date();

        // 1. Validasi stok cukup untuk setiap item (agregasi dari semua stok yang tidak kedaluwarsa)
        for (const item of data.details) {
            const stoks = await tx.stok.findMany({
                where: {
                    obatId: item.obatId,
                    jumlah: { gt: 0 },
                    tanggalKedaluwarsa: { gt: now } // Exclude expired batches
                },
                orderBy: { tanggalKedaluwarsa: 'asc' } // FIFO: ambil yang paling cepat kedaluwarsa
            });

            const totalStokTersedia = stoks.reduce((sum, b) => sum + b.jumlah, 0);
            if (totalStokTersedia < item.quantity) {
                const obat = await tx.obat.findUnique({ where: { id: item.obatId } });
                throw new Error(`Stok barang tidak mencukupi untuk Obat: ${obat?.nama || item.obatId}. Tersedia: ${totalStokTersedia}, Diminta: ${item.quantity}`);
            }

            // Simpan stoks untuk digunakan di langkah 3
            item.availableStoks = stoks;
        }

        // 2. Buat Transaksi Penjualan
        const penjualan = await tx.transaksiPenjualan.create({
            data: {
                total: data.total,
                details: {
                    create: data.details.map((d: any) => ({
                        quantity: d.quantity,
                        harga: d.harga,
                        obatId: d.obatId
                    }))
                }
            },
            include: { details: true }
        });

        // 3. Kurangi stok menggunakan logika FIFO dan catat pergerakan stok
        for (const item of data.details) {
            let sisaUntukDikurangi = item.quantity;

            for (const stok of item.availableStoks) {
                if (sisaUntukDikurangi <= 0) break;

                const qtyDariStokIni = Math.min(sisaUntukDikurangi, stok.jumlah);
                sisaUntukDikurangi -= qtyDariStokIni;

                // Update stok
                await tx.stok.update({
                    where: { id: stok.id },
                    data: { jumlah: { decrement: qtyDariStokIni } }
                });

                // Catat pergerakan stok
                await tx.stockMovement.create({
                    data: {
                        type: 'OUT',
                        quantity: qtyDariStokIni,
                        stokId: stok.id
                    }
                });
            }
        }

        return penjualan;
    });
};

export const getAllPenjualanService = async (search?: string) => {
    return await prisma.transaksiPenjualan.findMany({
        where: search ? {
            id: {
                contains: search,
                mode: 'insensitive'
            }
        } : undefined,
        include: { 
            details: {
                include: { obat: true }
            }
        },
        orderBy: { createdAt: 'desc' }
    });
};

export const getPenjualanByIdService = async (id: string) => {
    const transaksi = await prisma.transaksiPenjualan.findUnique({
        where: { id },
        include: { 
            details: {
                include: { obat: true }
            }
        }
    });

    if (!transaksi) {
        throw new Error("Data transaksi tidak ditemukan");
    }

    return transaksi;
};

export const deletePenjualanService = async (id: string) => {
    return await prisma.$transaction(async (tx) => {
        // 1. Dapatkan detail transaksi sebelum dihapus
        const transaksi = await tx.transaksiPenjualan.findUnique({
            where: { id },
            include: { details: true }
        });

        if (!transaksi) {
            throw new Error("Transaksi tidak ditemukan");
        }

        // 2. Kembalikan stok (VOID)
        for (const detail of transaksi.details) {
            // Cari batch stok mana saja untuk obat ini. 
            // Kita kembalikan ke batch yang paling akhir kadaluarsanya agar aman.
            const stok = await tx.stok.findFirst({
                where: { obatId: detail.obatId },
                orderBy: { tanggalKedaluwarsa: 'desc' }
            });

            if (stok) {
                await tx.stok.update({
                    where: { id: stok.id },
                    data: { jumlah: { increment: detail.quantity } }
                });

                await tx.stockMovement.create({
                    data: {
                        type: 'ADJUSTMENT', // Void / pengembalian
                        quantity: detail.quantity,
                        stokId: stok.id
                    }
                });
            } else {
                // Jika tidak ada stok record sama sekali untuk obat ini (jarang terjadi, tapi jaga-jaga)
                const farFuture = new Date();
                farFuture.setFullYear(farFuture.getFullYear() + 1); // Expiry 1 tahun dari sekarang
                
                const newStok = await tx.stok.create({
                    data: {
                        obatId: detail.obatId,
                        jumlah: detail.quantity,
                        tanggalKedaluwarsa: farFuture
                    }
                });

                await tx.stockMovement.create({
                    data: {
                        type: 'ADJUSTMENT',
                        quantity: detail.quantity,
                        stokId: newStok.id
                    }
                });
            }
        }

        // 3. Hapus Transaksi (Cascade delete akan menghapus DetailPenjualan)
        return await tx.transaksiPenjualan.delete({
            where: { id }
        });
    });
};
