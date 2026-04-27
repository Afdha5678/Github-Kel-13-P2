import { Request, Response } from 'express';
import * as supplierService from '@/services/supplierService';

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
        const suppliers = await supplierService.getAllSupplierService();
        res.status(200).json({ success: true, data: suppliers });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data supplier' });
    }
};
