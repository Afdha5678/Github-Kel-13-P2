"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObatKedaluwarsaService = exports.deleteObatService = exports.updateObatService = exports.getObatByIdService = exports.getAllObatService = exports.createObatService = void 0;
const prisma_1 = require("../lib/prisma");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// --- BUSINESS LOGIC LAYER (SERVICES) ---
// 1. CREATE: Tambah Obat
const createObatService = async (data) => {
    return await prisma_1.prisma.obat.create({
        data: {
            nama: data.nama,
            hargaJual: data.hargaJual,
            image: data.image,
            satuan: data.satuan || "Pcs",
            lokasiRak: data.lokasiRak || null
        },
        include: { stok: true }
    });
};
exports.createObatService = createObatService;
// 2. READ: Ambil Semua Data Obat
const getAllObatService = async (search) => {
    const obats = await prisma_1.prisma.obat.findMany({
        where: search ? {
            nama: {
                contains: search,
                mode: 'insensitive'
            }
        } : undefined,
        include: { stok: true },
        orderBy: { createdAt: 'desc' }
    });
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    const now = new Date();
    // Kalkulasi total stok dari semua stok yang aktif (tidak kedaluwarsa)
    return obats.map(obat => {
        // Hanya hitung stok yang belum kedaluwarsa
        const activeStok = obat.stok.filter(item => item.tanggalKedaluwarsa > now);
        const totalStok = activeStok.reduce((sum, item) => sum + item.jumlah, 0);
        const hasExpiringStock = activeStok.some(item => item.jumlah > 0 && item.tanggalKedaluwarsa <= thirtyDaysFromNow);
        return {
            ...obat,
            stok: activeStok, // Hanya stok aktif yang dikembalikan
            totalStok,
            hasExpiringStock
        };
    });
};
exports.getAllObatService = getAllObatService;
// 3. READ: Ambil Data Obat Spesifik Berdasarkan ID
const getObatByIdService = async (id) => {
    const obat = await prisma_1.prisma.obat.findUnique({
        where: { id },
        include: { stok: true }
    });
    if (!obat) {
        throw new Error("Data obat tidak ditemukan");
    }
    const totalStok = obat.stok.reduce((sum, item) => sum + item.jumlah, 0);
    return { ...obat, totalStok };
};
exports.getObatByIdService = getObatByIdService;
// 4. UPDATE: Perbarui Data Obat
const updateObatService = async (id, data) => {
    // Jika ada gambar baru yang diunggah, kita perlu menghapus gambar lama
    if (data.image) {
        const oldObat = await prisma_1.prisma.obat.findUnique({ where: { id } });
        if (oldObat && oldObat.image && oldObat.image !== data.image) {
            try {
                const oldImagePath = path_1.default.join(process.cwd(), 'public', oldObat.image);
                if (fs_1.default.existsSync(oldImagePath)) {
                    fs_1.default.unlinkSync(oldImagePath);
                }
            }
            catch (error) {
                console.error('Failed to delete old image file:', error);
            }
        }
    }
    return await prisma_1.prisma.obat.update({
        where: { id },
        data: {
            ...data
        },
        include: { stok: true }
    });
};
exports.updateObatService = updateObatService;
// 5. DELETE: Hapus Data Obat
const deleteObatService = async (id) => {
    // Cari data obat untuk mendapatkan path gambar
    const obat = await prisma_1.prisma.obat.findUnique({
        where: { id }
    });
    if (obat && obat.image) {
        try {
            // obat.image is formatted like "/uploads/filename.jpg"
            // We need to resolve it to "public/uploads/filename.jpg"
            const imagePath = path_1.default.join(process.cwd(), 'public', obat.image);
            if (fs_1.default.existsSync(imagePath)) {
                fs_1.default.unlinkSync(imagePath);
            }
        }
        catch (error) {
            console.error('Failed to delete image file:', error);
        }
    }
    // onCascade Delete will remove related Stok
    return await prisma_1.prisma.obat.delete({
        where: { id }
    });
};
exports.deleteObatService = deleteObatService;
// 6. BUSINESS RULE: Pengecekan Kedaluwarsa
const checkObatKedaluwarsaService = async () => {
    const hariIni = new Date();
    // Mengambil stok yang tanggal kedaluwarsanya kurang dari (lt) atau sama dengan (lte) hari ini
    return await prisma_1.prisma.stok.findMany({
        where: {
            tanggalKedaluwarsa: {
                lte: hariIni
            },
            jumlah: {
                gt: 0 // Hanya stok yang masih ada
            }
        },
        include: { obat: true }
    });
};
exports.checkObatKedaluwarsaService = checkObatKedaluwarsaService;
