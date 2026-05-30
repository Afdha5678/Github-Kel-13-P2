import { prisma } from '../lib/prisma';
export const createPembelianService = async (data) => {
    return await prisma.transaksiPembelian.create({
        data: {
            status: 'PENDING',
            supplierId: data.supplierId,
            details: {
                create: data.details.map((d) => ({
                    quantityOrdered: d.quantityOrdered,
                    quantityReceived: 0,
                    obatId: d.obatId
                }))
            }
        },
        include: { details: true }
    });
};
export const receivePembelianService = async (transaksiId, data) => {
    return await prisma.$transaction(async (tx) => {
        const transaksi = await tx.transaksiPembelian.findUnique({ where: { id: transaksiId } });
        if (!transaksi || transaksi.status === 'COMPLETED') {
            throw new Error('Transaksi tidak valid atau sudah selesai');
        }
        // Update kuantitas yang diterima
        const createdBatches = [];
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
                    },
                    include: { obat: true }
                });
                createdBatches.push(stok);
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
        const updatedTransaksi = await tx.transaksiPembelian.update({
            where: { id: transaksiId },
            data: { status: 'COMPLETED' },
            include: { details: true }
        });
        return {
            transaksi: updatedTransaksi,
            batches: createdBatches
        };
    });
};
export const getAllPembelianService = async (search) => {
    return await prisma.transaksiPembelian.findMany({
        where: search ? {
            id: {
                contains: search,
                mode: 'insensitive'
            }
        } : undefined,
        include: {
            details: {
                include: { obat: true }
            },
            supplier: true
        },
        orderBy: { createdAt: 'desc' }
    });
};
export const getPembelianByIdService = async (id) => {
    const transaksi = await prisma.transaksiPembelian.findUnique({
        where: { id },
        include: {
            details: {
                include: { obat: true }
            },
            supplier: true
        }
    });
    if (!transaksi) {
        throw new Error("Data transaksi pembelian tidak ditemukan");
    }
    return transaksi;
};
export const deletePembelianService = async (id) => {
    return await prisma.$transaction(async (tx) => {
        const transaksi = await tx.transaksiPembelian.findUnique({
            where: { id },
            include: { details: true }
        });
        if (!transaksi) {
            throw new Error("Transaksi pembelian tidak ditemukan");
        }
        // Jika transaksi sudah COMPLETED, kita harus kurangi stok yang pernah masuk
        if (transaksi.status === 'COMPLETED') {
            for (const detail of transaksi.details) {
                if (detail.quantityReceived > 0) {
                    // Cari stok yang masuk karena transaksi ini
                    // Pendekatan sederhana: kurangi stok di obat terkait
                    // Ideally we should track exactly which Stok id was created, but lacking that, we find latest Stok
                    const stok = await tx.stok.findFirst({
                        where: { obatId: detail.obatId },
                        orderBy: { createdAt: 'desc' }
                    });
                    if (stok) {
                        const reduceAmount = Math.min(stok.jumlah, detail.quantityReceived);
                        await tx.stok.update({
                            where: { id: stok.id },
                            data: { jumlah: { decrement: reduceAmount } }
                        });
                        await tx.stockMovement.create({
                            data: {
                                type: 'ADJUSTMENT',
                                quantity: reduceAmount, // we don't strictly record negative in quantity for movement in schema typically, but depends on logic. Just record quantity.
                                stokId: stok.id
                            }
                        });
                    }
                }
            }
        }
        return await tx.transaksiPembelian.delete({
            where: { id }
        });
    });
};
