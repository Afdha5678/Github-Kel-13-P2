"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePenjualan = exports.getPenjualanById = exports.getAllPenjualan = exports.createPenjualan = void 0;
const penjualanService = __importStar(require("../services/penjualanService"));
const createPenjualan = async (req, res) => {
    try {
        const newPenjualan = await penjualanService.createPenjualanService(req.body);
        res.status(201).json({ success: true, message: 'Transaksi penjualan berhasil', data: newPenjualan });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Transaksi gagal', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.createPenjualan = createPenjualan;
const getAllPenjualan = async (req, res) => {
    try {
        const search = req.query.search;
        const penjualan = await penjualanService.getAllPenjualanService(search);
        res.status(200).json({ success: true, data: penjualan });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data penjualan', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.getAllPenjualan = getAllPenjualan;
const getPenjualanById = async (req, res) => {
    try {
        const id = req.params.id;
        const penjualan = await penjualanService.getPenjualanByIdService(id);
        res.status(200).json({ success: true, message: 'Data transaksi ditemukan', data: penjualan });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        const statusCode = errorMessage.includes('tidak ditemukan') ? 404 : 500;
        res.status(statusCode).json({ success: false, message: errorMessage });
    }
};
exports.getPenjualanById = getPenjualanById;
const deletePenjualan = async (req, res) => {
    try {
        const id = req.params.id;
        await penjualanService.deletePenjualanService(id);
        res.status(200).json({ success: true, message: 'Transaksi berhasil dibatalkan dan stok dikembalikan' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus transaksi', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.deletePenjualan = deletePenjualan;
