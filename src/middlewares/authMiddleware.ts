// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Deklarasi Global untuk menambah properti 'user' pada Express Request
declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
                role: string;
            };
        }
    }
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak. Token autentikasi tidak ditemukan.',
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, role: string };

        // Sisipkan hasil dekode ke dalam request
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Token tidak valid atau telah kedaluwarsa.',
        });
    }
};