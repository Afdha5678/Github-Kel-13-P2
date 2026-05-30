import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
export const registerService = async (data) => {
    // 1. Cek email apakah sudah digunakan
    const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
    });
    if (existingUser) {
        throw new Error('Email sudah terdaftar');
    }
    // 2. Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(data.password, 10);
    // 3. Simpan ke database
    const user = await prisma.user.create({
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
export const loginService = async (data) => {
    // 1. Cari user berdasarkan email
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    });
    if (!user) {
        throw new Error('Email atau password salah');
    }
    // 2. Verifikasi kesesuaian password yang diinput dengan hash di DB
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Email atau password salah');
    }
    // 3. Generate JWT Token
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    // 4. Hilangkan password dari response
    const { password, ...userWithoutPassword } = user;
    return {
        user: userWithoutPassword,
        token
    };
};
import crypto from 'crypto';
import { sendResetPasswordEmail } from './emailService';
export const forgotPasswordService = async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('Email tidak ditemukan');
    }
    // Buat token acak
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    // Kedaluwarsa dalam 1 jam
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);
    await prisma.user.update({
        where: { id: user.id },
        data: {
            resetPasswordToken: hashedToken,
            resetPasswordExpires: expiresAt
        }
    });
    // Kirim email
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
    await sendResetPasswordEmail(user.email, resetUrl);
};
export const resetPasswordService = async (token, newPassword) => {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await prisma.user.findFirst({
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
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: newHashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null
        }
    });
};
