import { Request, Response } from 'express';
import * as userService from '@/services/userService';

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const user = await userService.getProfileService(userId);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil profil', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const updatedUser = await userService.updateProfileService(userId, req.body);
        res.status(200).json({ success: true, message: 'Profil berhasil diperbarui', data: updatedUser });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error';
        res.status(400).json({ success: false, message: 'Gagal memperbarui profil', error: message });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const search = req.query.search as string | undefined;
        const users = await userService.getAllUsersService(search);
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const user = await userService.getUserByIdService(id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(404).json({ success: false, message: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await userService.createUserService(req.body);
        res.status(201).json({ success: true, message: 'Pengguna berhasil ditambahkan', data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Gagal menambahkan pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const updateUserRole = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const updatedUser = await userService.updateUserService(id, req.body);
        res.status(200).json({ success: true, message: 'Pengguna berhasil diperbarui', data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Gagal memperbarui pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        await userService.deleteUserService(id);
        res.status(200).json({ success: true, message: 'Pengguna berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
