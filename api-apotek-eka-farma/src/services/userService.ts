import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';

export const getProfileService = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        throw new Error('User tidak ditemukan');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const updateProfileService = async (userId: string, data: any) => {
    // Cek apakah email sudah digunakan oleh user lain
    if (data.email) {
        const existingUser = await prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id: userId }
            }
        });

        if (existingUser) {
            throw new Error('Email sudah digunakan oleh akun lain');
        }
    }

    const updateData: any = {
        nama: data.nama,
        email: data.email
    };

    // Jika password diisi, hash password baru
    if (data.password && data.password.trim() !== '') {
        updateData.password = await bcrypt.hash(data.password, 10);
    }

    const user = await prisma.user.update({
        where: { id: userId },
        data: updateData
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const getAllUsersService = async (search?: string) => {
    return await prisma.user.findMany({
        where: search ? {
            OR: [
                { nama: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } }
            ]
        } : undefined,
        select: {
            id: true,
            nama: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        },
        orderBy: { createdAt: 'desc' }
    });
};

export const getUserByIdService = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            nama: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        }
    });

    if (!user) throw new Error('User tidak ditemukan');
    return user;
};

export const createUserService = async (data: any) => {
    const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
    });

    if (existingUser) {
        throw new Error('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            nama: data.nama,
            email: data.email,
            password: hashedPassword,
            role: data.role || 'PEGAWAI',
        }
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const updateUserService = async (id: string, data: any) => {
    if (data.email) {
        const existingUser = await prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id }
            }
        });

        if (existingUser) {
            throw new Error('Email sudah digunakan oleh akun lain');
        }
    }

    const updateData: any = {
        nama: data.nama,
        email: data.email,
        role: data.role
    };

    if (data.password && data.password.trim() !== '') {
        updateData.password = await bcrypt.hash(data.password, 10);
    }

    const user = await prisma.user.update({
        where: { id },
        data: updateData
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const deleteUserService = async (id: string) => {
    return await prisma.user.delete({
        where: { id }
    });
};
