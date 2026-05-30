import { prisma } from '../lib/prisma';

export interface CreateSupplierDTO {
    nama: string;
    alamat: string;
    telepon: string;
}

export interface UpdateSupplierDTO {
    nama?: string;
    alamat?: string;
    telepon?: string;
}

export const createSupplierService = async (data: CreateSupplierDTO) => {
    return await prisma.supplier.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            telepon: data.telepon,
        }
    });
};

export const getAllSupplierService = async (search?: string) => {
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

export const getSupplierByIdService = async (id: string) => {
    const supplier = await prisma.supplier.findUnique({
        where: { id }
    });

    if (!supplier) {
        throw new Error("Data supplier tidak ditemukan");
    }

    return supplier;
};

export const updateSupplierService = async (id: string, data: UpdateSupplierDTO) => {
    return await prisma.supplier.update({
        where: { id },
        data: {
            ...data
        }
    });
};

export const deleteSupplierService = async (id: string) => {
    return await prisma.supplier.delete({
        where: { id }
    });
};
