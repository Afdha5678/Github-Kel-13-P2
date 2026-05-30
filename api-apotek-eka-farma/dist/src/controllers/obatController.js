import * as obatService from '../services/obatService';
/**
 * MENGELOLA HTTP REQUEST UNTUK ENTITAS OBAT
 * Memisahkan logika HTTP dari logika bisnis (Service Layer)
 */
// 1. CREATE: Tambah Obat Baru
export const createObat = async (req, res) => {
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
// 2. READ: Ambil Semua Data Obat
export const getAllObat = async (req, res) => {
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
// 3. READ: Ambil Data Obat Spesifik Berdasarkan ID
export const getObatById = async (req, res) => {
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
// 4. UPDATE: Perbarui Data Obat
export const updateObat = async (req, res) => {
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
// 5. DELETE: Hapus Data Obat
export const deleteObat = async (req, res) => {
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
// 6. BUSINESS RULE: Pengecekan Kedaluwarsa
export const checkObatKedaluwarsa = async (req, res) => {
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
