import { Request, Response } from 'express';
import * as authService from '@/services/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const newUser = await authService.registerService(userData);

        res.status(201).json({
            success: true,
            message: 'Registrasi berhasil',
            data: newUser
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        res.status(400).json({
            success: false,
            message: errorMessage
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const loginData = req.body;
        const result = await authService.loginService(loginData);

        res.status(200).json({
            success: true,
            message: 'Login berhasil',
            data: result
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown Error';
        res.status(401).json({
            success: false,
            message: errorMessage
        });
    }
};
