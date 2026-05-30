"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserRole = exports.createUser = exports.getUserById = exports.getAllUsers = exports.updateProfile = exports.getProfile = void 0;
const userService = __importStar(require("../services/userService"));
const getProfile = async (req, res) => {
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
exports.getProfile = getProfile;
const updateProfile = async (req, res) => {
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
exports.updateProfile = updateProfile;
const getAllUsers = async (req, res) => {
    try {
        const search = req.query.search;
        const users = await userService.getAllUsersService(search);
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserByIdService(id);
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(404).json({ success: false, message: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUserService(req.body);
        res.status(201).json({ success: true, message: 'Pengguna berhasil ditambahkan', data: newUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Gagal menambahkan pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.createUser = createUser;
const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await userService.updateUserService(id, req.body);
        res.status(200).json({ success: true, message: 'Pengguna berhasil diperbarui', data: updatedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Gagal memperbarui pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.updateUserRole = updateUserRole;
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userService.deleteUserService(id);
        res.status(200).json({ success: true, message: 'Pengguna berhasil dihapus' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Gagal menghapus pengguna', error: error instanceof Error ? error.message : 'Unknown Error' });
    }
};
exports.deleteUser = deleteUser;
