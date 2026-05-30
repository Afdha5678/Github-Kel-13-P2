import { Router } from 'express';
import * as authController from '../controllers/authController';

const router = Router();

// Rute registrasi pengguna (Supaya kamu bisa punya user untuk dites login)
router.post('/register', authController.register);

// Rute login
router.post('/login', authController.login);

// Route Forgot Password
router.post('/forgot-password', authController.forgotPassword);

// Route Reset Password
router.post('/reset-password', authController.resetPassword);

export default router;
