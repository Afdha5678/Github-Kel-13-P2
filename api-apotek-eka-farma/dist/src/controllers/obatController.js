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
exports.checkObatKedaluwarsa = exports.deleteObat = exports.updateObat = exports.getObatById = exports.getAllObat = exports.createObat = void 0;
const obatService = __importStar(require("../services/obatService"));
/**
 * MENGELOLA HTTP REQUEST UNTUK ENTITAS OBAT
 * Memisahkan logika HTTP dari logika bisnis (Service Layer)
 */
// 1. CREATE: Tambah Obat Baru
const createObat = async (req, res) => {
    try {
        // Mengambil payload dari body request frontend
        const obatData = req.body;
        if (req.file) {
            obatData.image = `/uploads/${req.file.filename}`;
        }
        const newObat = await obatService.createObatService(obatData);
        // 201 Created: Standar HTTP untuk resource yang berhasil dibuat
        res.status(201).json({
            success: true,
            message: 'Data Obat berhasil ditambahkan',
            data: newObat
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal menambahkan data obat',
            error: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};
exports.createObat = createObat;
// 2. READ: Ambil Semua Data Obat
const getAllObat = async (req, res) => {
    try {
        const search = req.query.search;
        const listObat = await obatService.getAllObatService(search);
        // 200 OK: Standar HTTP untuk request sukses
        res.status(200).json({
            success: true,
            message: 'Berhasil mengambil daftar obat',
            data: listObat
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal mengambil data obat',
            error: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};
exports.getAllObat = getAllObat;
// 3. READ: Ambil Data Obat Spesifik Berdasarkan ID
const getObatById = async (req, res) => {
    try {
        // Mengambil ID dari URL Parameter (contoh: /api/obat/12345)
        const id = req.params.id;
        const obat = await obatService.getObatByIdService(id);
        res.status(200).json({
            success: true,
            message: 'Data obat ditemukan',
            data: obat
        });
    }
    catch (error) {
        // Menangkap error dari Service (misal: "Data obat tidak ditemukan")
        // 404 Not Found: Standar HTTP untuk data yang tidak ada
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        const statusCode = errorMessage.includes('tidak ditemukan') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: errorMessage
        });
    }
};
exports.getObatById = getObatById;
// 4. UPDATE: Perbarui Data Obat
const updateObat = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }
        const updatedObat = await obatService.updateObatService(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Data obat berhasil diperbarui',
            data: updatedObat
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal memperbarui data obat',
            error: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};
exports.updateObat = updateObat;
// 5. DELETE: Hapus Data Obat
const deleteObat = async (req, res) => {
    try {
        const id = req.params.id;
        await obatService.deleteObatService(id);
        res.status(200).json({
            success: true,
            message: 'Data obat beserta rekam stok berhasil dihapus'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal menghapus data obat',
            error: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};
exports.deleteObat = deleteObat;
// 6. BUSINESS RULE: Pengecekan Kedaluwarsa
const checkObatKedaluwarsa = async (req, res) => {
    try {
        const expiredObat = await obatService.checkObatKedaluwarsaService();
        res.status(200).json({
            success: true,
            message: 'Berhasil mengecek data obat kedaluwarsa',
            total_expired: expiredObat.length,
            data: expiredObat
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal mengecek kedaluwarsa obat',
            error: error instanceof Error ? error.message : 'Unknown Error'
        });
    }
};
exports.checkObatKedaluwarsa = checkObatKedaluwarsa;
