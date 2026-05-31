import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak. Token autentikasi tidak ditemukan.',
        });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
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
export const authorizeRole = (roles) => {
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
