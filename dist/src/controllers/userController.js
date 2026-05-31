import * as userService from '@/services/userService';
export const getProfile = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        const user = await userService.getProfileService(userId);
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil profil', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        const updatedUser = await userService.updateProfileService(userId, req.body);
        res.status(200).json({ success: true, message: 'Profil berhasil diperbarui', data: updatedUser });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error';
        res.status(400).json({ success: false, message: 'Gagal memperbarui profil', error: message });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const search = req.query.search;
        const users = await userService.getAllUsersService(search);
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserByIdService(id);
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(404).json({ success: false, message: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
export const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUserService(req.body);
        res.status(201).json({ success: true, message: 'Pengguna berhasil ditambahkan', data: newUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Gagal menambahkan pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
export const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await userService.updateUserService(id, req.body);
        res.status(200).json({ success: true, message: 'Pengguna berhasil diperbarui', data: updatedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Gagal memperbarui pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userService.deleteUserService(id);
        res.status(200).json({ success: true, message: 'Pengguna berhasil dihapus' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
