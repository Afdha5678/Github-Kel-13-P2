import { prisma } from '@/lib/prisma';

export const createSupplierService = async (data: any) => {
    return await prisma.supplier.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            telepon: data.telepon,
        }
    });
};

export const getAllSupplierService = async () => {
    return await prisma.supplier.findMany({
        orderBy: { createdAt: 'desc' }
    });
};
