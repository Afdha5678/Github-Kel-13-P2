import { Router } from 'express';
import * as authController from '@/controllers/authController';

const router = Router();

// Rute registrasi pengguna (Supaya kamu bisa punya user untuk dites login)
router.post('/register', authController.register);

// Rute login
router.post('/login', authController.login);

export default router;
