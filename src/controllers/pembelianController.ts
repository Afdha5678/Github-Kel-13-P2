import { Request, Response } from 'express';
import * as pembelianService from '@/services/pembelianService';

export const createPembelian = async (req: Request, res: Response) => {
    try {
        const newPembelian = await pembelianService.createPembelianService(req.body);
        res.status(201).json({ success: true, message: 'Pesanan pembelian berhasil dibuat', data: newPembelian });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Transaksi gagal', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const receivePembelian = async (req: Request, res: Response) => {
    try {
        const result = await pembelianService.receivePembelianService(req.params.id, req.body);
        res.status(200).json({ success: true, message: 'Barang berhasil diterima dan stok diupdate', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Gagal menerima barang', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getAllPembelian = async (req: Request, res: Response) => {
    try {
        const pembelian = await pembelianService.getAllPembelianService();
        res.status(200).json({ success: true, data: pembelian });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data pembelian' });
    }
};
