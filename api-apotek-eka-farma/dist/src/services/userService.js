"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = exports.updateProfileService = exports.getProfileService = void 0;
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getProfileService = async (userId) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userId }
    });
    if (!user) {
        throw new Error('User tidak ditemukan');
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.getProfileService = getProfileService;
const updateProfileService = async (userId, data) => {
    // Cek apakah email sudah digunakan oleh user lain
    if (data.email) {
        const existingUser = await prisma_1.prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id: userId }
            }
        });
        if (existingUser) {
            throw new Error('Email sudah digunakan oleh akun lain');
        }
    }
    const updateData = {
        nama: data.nama,
        email: data.email
    };
    // Jika password diisi, hash password baru
    if (data.password && data.password.trim() !== '') {
        updateData.password = await bcrypt_1.default.hash(data.password, 10);
    }
    const user = await prisma_1.prisma.user.update({
        where: { id: userId },
        data: updateData
    });
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.updateProfileService = updateProfileService;
const getAllUsersService = async (search) => {
    return await prisma_1.prisma.user.findMany({
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
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = async (id) => {
    const user = await prisma_1.prisma.user.findUnique({
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
    if (!user)
        throw new Error('User tidak ditemukan');
    return user;
};
exports.getUserByIdService = getUserByIdService;
const createUserService = async (data) => {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email: data.email }
    });
    if (existingUser) {
        throw new Error('Email sudah terdaftar');
    }
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    const user = await prisma_1.prisma.user.create({
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
exports.createUserService = createUserService;
const updateUserService = async (id, data) => {
    if (data.email) {
        const existingUser = await prisma_1.prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id }
            }
        });
        if (existingUser) {
            throw new Error('Email sudah digunakan oleh akun lain');
        }
    }
    const updateData = {
        nama: data.nama,
        email: data.email,
        role: data.role
    };
    if (data.password && data.password.trim() !== '') {
        updateData.password = await bcrypt_1.default.hash(data.password, 10);
    }
    const user = await prisma_1.prisma.user.update({
        where: { id },
        data: updateData
    });
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    return await prisma_1.prisma.user.delete({
        where: { id }
    });
};
exports.deleteUserService = deleteUserService;
