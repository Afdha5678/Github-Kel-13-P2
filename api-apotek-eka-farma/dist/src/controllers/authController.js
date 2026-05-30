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
exports.login = exports.resetPassword = exports.forgotPassword = exports.register = void 0;
const authService = __importStar(require("../services/authService"));
const register = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await authService.registerService(userData);
        res.status(201).json({
            success: true,
            message: 'Registrasi berhasil',
            data: newUser
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error';
        res.status(400).json({ success: false, message, error: message });
    }
};
exports.register = register;
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email harus diisi' });
        }
        await authService.forgotPasswordService(email);
        res.status(200).json({ success: true, message: 'Instruksi reset password telah dikirim ke email Anda' });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error';
        // We still return 200 to prevent email enumeration attacks, or 400 for user experience depending on requirements.
        // Returning 400 here for simplicity and user feedback.
        res.status(400).json({ success: false, message });
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) {
            return res.status(400).json({ success: false, message: 'Token dan password baru harus diisi' });
        }
        if (newPassword.length < 6) {
            return res.status(400).json({ success: false, message: 'Password minimal 6 karakter' });
        }
        await authService.resetPasswordService(token, newPassword);
        res.status(200).json({ success: true, message: 'Password berhasil direset' });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error';
        res.status(400).json({ success: false, message });
    }
};
exports.resetPassword = resetPassword;
const login = async (req, res) => {
    try {
        const loginData = req.body;
        const result = await authService.loginService(loginData);
        res.status(200).json({
            success: true,
            message: 'Login berhasil',
            data: result
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        res.status(401).json({
            success: false,
            message: errorMessage
        });
    }
};
exports.login = login;
