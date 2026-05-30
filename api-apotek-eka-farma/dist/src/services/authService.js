"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordService = exports.forgotPasswordService = exports.loginService = exports.registerService = void 0;
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
const registerService = async (data) => {
    // 1. Cek email apakah sudah digunakan
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email: data.email }
    });
    if (existingUser) {
        throw new Error('Email sudah terdaftar');
    }
    // 2. Hash password sebelum disimpan
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    // 3. Simpan ke database
    const user = await prisma_1.prisma.user.create({
        data: {
            nama: data.nama,
            email: data.email,
            password: hashedPassword,
            role: data.role || 'PEGAWAI', // Default sesuai schema Prisma
        }
    });
    // 4. Hilangkan password dari response demi keamanan
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.registerService = registerService;
const loginService = async (data) => {
    // 1. Cari user berdasarkan email
    const user = await prisma_1.prisma.user.findUnique({
        where: { email: data.email }
    });
    if (!user) {
        throw new Error('Email atau password salah');
    }
    // 2. Verifikasi kesesuaian password yang diinput dengan hash di DB
    const isPasswordValid = await bcrypt_1.default.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Email atau password salah');
    }
    // 3. Generate JWT Token
    const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    // 4. Hilangkan password dari response
    const { password, ...userWithoutPassword } = user;
    return {
        user: userWithoutPassword,
        token
    };
};
exports.loginService = loginService;
const crypto_1 = __importDefault(require("crypto"));
const emailService_1 = require("./emailService");
const forgotPasswordService = async (email) => {
    const user = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('Email tidak ditemukan');
    }
    // Buat token acak
    const resetToken = crypto_1.default.randomBytes(32).toString('hex');
    const hashedToken = crypto_1.default.createHash('sha256').update(resetToken).digest('hex');
    // Kedaluwarsa dalam 1 jam
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);
    await prisma_1.prisma.user.update({
        where: { id: user.id },
        data: {
            resetPasswordToken: hashedToken,
            resetPasswordExpires: expiresAt
        }
    });
    // Kirim email
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
    await (0, emailService_1.sendResetPasswordEmail)(user.email, resetUrl);
};
exports.forgotPasswordService = forgotPasswordService;
const resetPasswordService = async (token, newPassword) => {
    const hashedToken = crypto_1.default.createHash('sha256').update(token).digest('hex');
    const user = await prisma_1.prisma.user.findFirst({
        where: {
            resetPasswordToken: hashedToken,
            resetPasswordExpires: {
                gt: new Date()
            }
        }
    });
    if (!user) {
        throw new Error('Token tidak valid atau sudah kedaluwarsa');
    }
    const newHashedPassword = await bcrypt_1.default.hash(newPassword, 10);
    await prisma_1.prisma.user.update({
        where: { id: user.id },
        data: {
            password: newHashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null
        }
    });
};
exports.resetPasswordService = resetPasswordService;
