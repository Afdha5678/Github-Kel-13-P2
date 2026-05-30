import { Request, Response } from 'express';
import * as penjualanService from '../services/penjualanService';

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
        const search = req.query.search as string | undefined;
        const penjualan = await penjualanService.getAllPenjualanService(search);
        res.status(200).json({ success: true, data: penjualan });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data penjualan', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getPenjualanById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const penjualan = await penjualanService.getPenjualanByIdService(id);
        res.status(200).json({ success: true, message: 'Data transaksi ditemukan', data: penjualan });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        const statusCode = errorMessage.includes('tidak ditemukan') ? 404 : 500;
        res.status(statusCode).json({ success: false, message: errorMessage });
    }
};

export const deletePenjualan = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        await penjualanService.deletePenjualanService(id);
        res.status(200).json({ success: true, message: 'Transaksi berhasil dibatalkan dan stok dikembalikan' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus transaksi', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
