"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
// Pastikan folder uploads ada
const uploadDir = path_1.default.join(process.cwd(), 'public/uploads');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
// Konfigurasi penyimpanan multer
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Buat nama file unik: UUID + ekstensi asli
        const ext = path_1.default.extname(file.originalname);
        const fileName = `${(0, uuid_1.v4)()}${ext}`;
        cb(null, fileName);
    }
});
// Filter untuk hanya menerima gambar
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error('Format file tidak didukung. Harap upload gambar (JPEG, PNG, WEBP).'));
    }
};
exports.upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Batas ukuran 5MB
    },
    fileFilter
});
