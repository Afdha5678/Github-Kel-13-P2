import { prisma } from "../lib/prisma";
import fs from 'fs';
import path from 'path';
// --- BUSINESS LOGIC LAYER (SERVICES) ---
// 1. CREATE: Tambah Obat
export const createObatService = async (data) => {
    return await prisma.obat.create({
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
// 2. READ: Ambil Semua Data Obat
export const getAllObatService = async (search) => {
    const obats = await prisma.obat.findMany({
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
// 3. READ: Ambil Data Obat Spesifik Berdasarkan ID
export const getObatByIdService = async (id) => {
    const obat = await prisma.obat.findUnique({
        where: { id },
        include: { stok: true }
    });
    if (!obat) {
        throw new Error("Data obat tidak ditemukan");
    }
    const totalStok = obat.stok.reduce((sum, item) => sum + item.jumlah, 0);
    return { ...obat, totalStok };
};
// 4. UPDATE: Perbarui Data Obat
export const updateObatService = async (id, data) => {
    // Jika ada gambar baru yang diunggah, kita perlu menghapus gambar lama
    if (data.image) {
        const oldObat = await prisma.obat.findUnique({ where: { id } });
        if (oldObat && oldObat.image && oldObat.image !== data.image) {
            try {
                const oldImagePath = path.join(process.cwd(), 'public', oldObat.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            catch (error) {
                console.error('Failed to delete old image file:', error);
            }
        }
    }
    return await prisma.obat.update({
        where: { id },
        data: {
            ...data
        },
        include: { stok: true }
    });
};
// 5. DELETE: Hapus Data Obat
export const deleteObatService = async (id) => {
    // Cari data obat untuk mendapatkan path gambar
    const obat = await prisma.obat.findUnique({
        where: { id }
    });
    if (obat && obat.image) {
        try {
            // obat.image is formatted like "/uploads/filename.jpg"
            // We need to resolve it to "public/uploads/filename.jpg"
            const imagePath = path.join(process.cwd(), 'public', obat.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        catch (error) {
            console.error('Failed to delete image file:', error);
        }
    }
    // onCascade Delete will remove related Stok
    return await prisma.obat.delete({
        where: { id }
    });
};
// 6. BUSINESS RULE: Pengecekan Kedaluwarsa
export const checkObatKedaluwarsaService = async () => {
    const hariIni = new Date();
    // Mengambil stok yang tanggal kedaluwarsanya kurang dari (lt) atau sama dengan (lte) hari ini
    return await prisma.stok.findMany({
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
