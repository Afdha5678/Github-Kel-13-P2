import { prisma } from '../lib/prisma';
export const createSupplierService = async (data) => {
    return await prisma.supplier.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            telepon: data.telepon,
        }
    });
};
export const getAllSupplierService = async (search) => {
    return await prisma.supplier.findMany({
        where: search ? {
            nama: {
                contains: search,
                mode: 'insensitive'
            }
        } : undefined,
        orderBy: { createdAt: 'desc' }
    });
};
export const getSupplierByIdService = async (id) => {
    const supplier = await prisma.supplier.findUnique({
        where: { id }
    });
    if (!supplier) {
        throw new Error("Data supplier tidak ditemukan");
    }
    return supplier;
};
export const updateSupplierService = async (id, data) => {
    return await prisma.supplier.update({
        where: { id },
        data: {
            ...data
        }
    });
};
export const deleteSupplierService = async (id) => {
    return await prisma.supplier.delete({
        where: { id }
    });
};
