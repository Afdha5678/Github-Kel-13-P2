import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

export const registerService = async (data: any) => {
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

export const loginService = async (data: any) => {
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
    const token = jwt.sign(
        { userId: user.id, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN as any }
    );

    // 4. Hilangkan password dari response
    const { password, ...userWithoutPassword } = user;

    return {
        user: userWithoutPassword,
        token
    };
};
