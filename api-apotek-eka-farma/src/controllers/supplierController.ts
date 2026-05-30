import { Request, Response } from 'express';
import * as supplierService from '../services/supplierService';

export const createSupplier = async (req: Request, res: Response) => {
    try {
        const newSupplier = await supplierService.createSupplierService(req.body);
        res.status(201).json({ success: true, message: 'Supplier berhasil ditambahkan', data: newSupplier });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menambah supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getAllSupplier = async (req: Request, res: Response) => {
    try {
        const search = req.query.search as string | undefined;
        const suppliers = await supplierService.getAllSupplierService(search);
        res.status(200).json({ success: true, message: 'Berhasil mengambil daftar supplier', data: suppliers });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getSupplierById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const supplier = await supplierService.getSupplierByIdService(id);
        res.status(200).json({ success: true, message: 'Data supplier ditemukan', data: supplier });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        const statusCode = errorMessage.includes('tidak ditemukan') ? 404 : 500;
        res.status(statusCode).json({ success: false, message: errorMessage });
    }
};

export const updateSupplier = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const updatedSupplier = await supplierService.updateSupplierService(id, req.body);
        res.status(200).json({ success: true, message: 'Data supplier berhasil diperbarui', data: updatedSupplier });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal memperbarui data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const deleteSupplier = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        await supplierService.deleteSupplierService(id);
        res.status(200).json({ success: true, message: 'Data supplier berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus data supplier', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
