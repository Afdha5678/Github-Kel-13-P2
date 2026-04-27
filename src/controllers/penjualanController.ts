import { Request, Response } from 'express';
import * as penjualanService from '@/services/penjualanService';

export const createPenjualan = async (req: Request, res: Response) => {
    try {
        const newPenjualan = await penjualanService.createPenjualanService(req.body);
        res.status(201).json({ success: true, message: 'Transaksi penjualan berhasil', data: newPenjualan });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Transaksi gagal', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getAllPenjualan = async (req: Request, res: Response) => {
    try {
        const penjualan = await penjualanService.getAllPenjualanService();
        res.status(200).json({ success: true, data: penjualan });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data penjualan' });
    }
};
