import { prisma } from "@/lib/prisma";

// --- DATA TRANSFER OBJECTS (DTO) ---
export interface CreateObatDTO {
    nama: string;
    hargaJual: number;
}

export interface UpdateObatDTO {
    nama?: string;
    hargaJual?: number;
}

// --- BUSINESS LOGIC LAYER (SERVICES) ---

// 1. CREATE: Tambah Obat
export const createObatService = async (data: CreateObatDTO) => {
    return await prisma.obat.create({
        data: {
            nama: data.nama,
            hargaJual: data.hargaJual,
        },
        include: { stok: true }
    });
};

// 2. READ: Ambil Semua Data Obat
export const getAllObatService = async () => {
    const obats = await prisma.obat.findMany({
        include: { stok: true },
        orderBy: { createdAt: 'desc' } 
    });

    // Kalkulasi total stok dari semua stok yang aktif
    return obats.map(obat => {
        const totalStok = obat.stok.reduce((sum, item) => sum + item.jumlah, 0);
        return {
            ...obat,
            totalStok
        };
    });
};

// 3. READ: Ambil Data Obat Spesifik Berdasarkan ID
export const getObatByIdService = async (id: string) => {
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
export const updateObatService = async (id: string, data: UpdateObatDTO) => {
    return await prisma.obat.update({
        where: { id },
        data: {
            ...data
        },
        include: { stok: true }
    });
};

// 5. DELETE: Hapus Data Obat
export const deleteObatService = async (id: string) => {
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