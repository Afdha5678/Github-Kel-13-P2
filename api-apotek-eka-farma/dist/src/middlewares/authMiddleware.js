"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak. Token autentikasi tidak ditemukan.',
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // Sisipkan hasil dekode ke dalam request
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Token tidak valid atau telah kedaluwarsa.',
        });
    }
};
exports.authenticateToken = authenticateToken;
const authorizeRole = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: 'Akses ditolak. Anda tidak memiliki izin untuk tindakan ini.',
            });
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
