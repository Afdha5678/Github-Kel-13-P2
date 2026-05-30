import * as authService from '../services/authService';
export const register = async (req, res) => {
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
export const forgotPassword = async (req, res) => {
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
export const resetPassword = async (req, res) => {
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
export const login = async (req, res) => {
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
