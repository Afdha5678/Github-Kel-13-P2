import { prisma } from '@/lib/prisma';

export const createPembelianService = async (data: any) => {
    return await prisma.transaksiPembelian.create({
        data: {
            status: 'PENDING',
            supplierId: data.supplierId,
            details: {
                create: data.details.map((d: any) => ({
                    quantityOrdered: d.quantityOrdered,
                    quantityReceived: 0,
                    obatId: d.obatId
                }))
            }
        },
        include: { details: true }
    });
};

export const receivePembelianService = async (transaksiId: string, data: any) => {
    return await prisma.$transaction(async (tx) => {
        const transaksi = await tx.transaksiPembelian.findUnique({ where: { id: transaksiId } });
        if (!transaksi || transaksi.status === 'COMPLETED') {
            throw new Error('Transaksi tidak valid atau sudah selesai');
        }

        // Update kuantitas yang diterima
        for (const item of data.details) {
            const detail = await tx.detailPembelian.update({
                where: { id: item.detailId },
                data: { quantityReceived: item.quantityReceived }
            });

            // Tambah stok baru dan catat StockMovement (IN)
            if (item.quantityReceived > 0) {
                if (!item.tanggalKedaluwarsa) {
                    throw new Error(`Tanggal kedaluwarsa harus diisi untuk barang yang diterima (Detail ID: ${detail.id})`);
                }

                const stok = await tx.stok.create({
                    data: {
                        jumlah: item.quantityReceived,
                        tanggalKedaluwarsa: new Date(item.tanggalKedaluwarsa),
                        obatId: detail.obatId
                    }
                });

                await tx.stockMovement.create({
                    data: {
                        type: 'IN',
                        quantity: item.quantityReceived,
                        stokId: stok.id
                    }
                });
            }
        }

        // Update status transaksi
        return await tx.transaksiPembelian.update({
            where: { id: transaksiId },
            data: { status: 'COMPLETED' },
            include: { details: true }
        });
    });
};

export const getAllPembelianService = async () => {
    return await prisma.transaksiPembelian.findMany({
        include: { details: true, supplier: true },
        orderBy: { createdAt: 'desc' }
    });
};
