"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSupplierService = exports.updateSupplierService = exports.getSupplierByIdService = exports.getAllSupplierService = exports.createSupplierService = void 0;
const prisma_1 = require("../lib/prisma");
const createSupplierService = async (data) => {
    return await prisma_1.prisma.supplier.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            telepon: data.telepon,
        }
    });
};
exports.createSupplierService = createSupplierService;
const getAllSupplierService = async (search) => {
    return await prisma_1.prisma.supplier.findMany({
        where: search ? {
            nama: {
                contains: search,
                mode: 'insensitive'
            }
        } : undefined,
        orderBy: { createdAt: 'desc' }
    });
};
exports.getAllSupplierService = getAllSupplierService;
const getSupplierByIdService = async (id) => {
    const supplier = await prisma_1.prisma.supplier.findUnique({
        where: { id }
    });
    if (!supplier) {
        throw new Error("Data supplier tidak ditemukan");
    }
    return supplier;
};
exports.getSupplierByIdService = getSupplierByIdService;
const updateSupplierService = async (id, data) => {
    return await prisma_1.prisma.supplier.update({
        where: { id },
        data: {
            ...data
        }
    });
};
exports.updateSupplierService = updateSupplierService;
const deleteSupplierService = async (id) => {
    return await prisma_1.prisma.supplier.delete({
        where: { id }
    });
};
exports.deleteSupplierService = deleteSupplierService;
