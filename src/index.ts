// src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config'; // Memuat variabel dari file .env secara otomatis

// Import Peta Jalur (Routes)
import obatRoutes from '@/routes/obatRoutes';
import authRoutes from '@/routes/authRoutes';
import supplierRoutes from '@/routes/supplierRoutes';
import penjualanRoutes from '@/routes/penjualanRoutes';
import pembelianRoutes from '@/routes/pembelianRoutes';

const app = express();

/**
 * 1. GLOBAL MIDDLEWARES
 * Komponen pencegat yang memproses setiap request sebelum masuk ke Route
 */
// Mengizinkan frontend (Next.js) di port berbeda untuk memanggil API ini
app.use(cors());

// Wajib: Mengizinkan Express membaca payload berformat JSON dari req.body
app.use(express.json());

// Opsional: Mengizinkan Express membaca data form-urlencoded standar
app.use(express.urlencoded({ extended: true }));


/**
 * 2. ENDPOINT MAPPING (ROUTES)
 * Menyambungkan URL utama ke modul router masing-masing entitas
 */
// Health Check API: Sangat berguna untuk memastikan server hidup saat di-deploy
app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: '🚀 API Server Apotek Eka Farma beroperasi secara normal!'
    });
});

app.use('/api/obat', obatRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/penjualan', penjualanRoutes);
app.use('/api/pembelian', pembelianRoutes);


/**
 * 3. GLOBAL ERROR HANDLER (FALLBACKS)
 * Menjaga server tetap hidup dan memberikan response rapi jika terjadi error
 */
// Fallback 1: Jika frontend memanggil URL yang tidak pernah kita definisikan (404)
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: `Endpoint ${req.originalUrl} tidak ditemukan di server ini.`
    });
});

// Fallback 2: Jika terjadi error di dalam logic (Controller/Service) yang lolos dari try-catch (500)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('❌ [Server Error]:', err.message);
    res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan internal pada server.',
        // Hanya tampilkan stack trace di mode development demi keamanan
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});


/**
 * 4. SERVER BOOTSTRAP
 * Menjalankan aplikasi pada port yang ditentukan di .env
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Server Backend Apotek berjalan di port: ${PORT}`);
    console.log(`🔗 Base URL: http://localhost:${PORT}/api`);
    console.log(`🩺 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`=================================================`);
});