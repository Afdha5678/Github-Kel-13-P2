"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config"); // Memuat variabel dari file .env secara otomatis
process.env.TZ = 'Asia/Jakarta';
// Import Peta Jalur (Routes)
const obatRoutes_1 = __importDefault(require("./routes/obatRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const supplierRoutes_1 = __importDefault(require("./routes/supplierRoutes"));
const penjualanRoutes_1 = __importDefault(require("./routes/penjualanRoutes"));
const pembelianRoutes_1 = __importDefault(require("./routes/pembelianRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
/**
 * 1. GLOBAL MIDDLEWARES
 * Komponen pencegat yang memproses setiap request sebelum masuk ke Route
 */
// Mengizinkan frontend (Next.js) di port berbeda untuk memanggil API ini
app.use((0, cors_1.default)());
// Wajib: Mengizinkan Express membaca payload berformat JSON dari req.body
app.use(express_1.default.json());
const path_1 = __importDefault(require("path"));
// Opsional: Mengizinkan Express membaca data form-urlencoded standar
app.use(express_1.default.urlencoded({ extended: true }));
// Sajikan folder public secara statis agar gambar bisa diakses (contoh: /uploads/nama_file.jpg)
app.use('/uploads', express_1.default.static(path_1.default.join(process.cwd(), 'public/uploads')));
/**
 * 2. ENDPOINT MAPPING (ROUTES)
 * Menyambungkan URL utama ke modul router masing-masing entitas
 */
// Health Check API: Sangat berguna untuk memastikan server hidup saat di-deploy
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: '🚀 API Server Apotek Eka Farma beroperasi secara normal!',
        db_configured: !!process.env.DATABASE_URL
    });
});
app.use('/api/obat', obatRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/supplier', supplierRoutes_1.default);
app.use('/api/penjualan', penjualanRoutes_1.default);
app.use('/api/pembelian', pembelianRoutes_1.default);
app.use('/api/dashboard', dashboardRoutes_1.default);
/**
 * 3. GLOBAL ERROR HANDLER (FALLBACKS)
 * Menjaga server tetap hidup dan memberikan response rapi jika terjadi error
 */
// Fallback 1: Jika frontend memanggil URL yang tidak pernah kita definisikan (404)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Endpoint ${req.originalUrl} tidak ditemukan di server ini.`
    });
});
// Fallback 2: Jika terjadi error di dalam logic (Controller/Service) yang lolos dari try-catch (500)
app.use((err, req, res, next) => {
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
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`=================================================`);
        console.log(`🚀 Server Backend Apotek berjalan di port: ${PORT}`);
        console.log(`🔗 Base URL: http://localhost:${PORT}/api`);
        console.log(`🩺 Health Check: http://localhost:${PORT}/api/health`);
        console.log(`=================================================`);
    });
}
exports.default = app;
module.exports = app;
