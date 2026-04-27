// src/middlewares/formRequest.ts
import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export interface AppRequest {
    authorize: (req: Request) => boolean | Promise<boolean>;
    rules: z.ZodTypeAny;
}

export const formRequest = (requestClass: AppRequest) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // 1. Otorisasi (Cek Hak Akses)
            const isAuthorized = await requestClass.authorize(req);
            if (!isAuthorized) {
                return res.status(403).json({
                    success: false,
                    message: 'Akses ditolak. Anda tidak memiliki izin untuk tindakan ini.',
                });
            }

            // 2. Validasi Data (Zod)
            await requestClass.rules.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));

                return res.status(422).json({
                    success: false,
                    message: 'Validasi input gagal.',
                    errors: errorMessages,
                });
            }
            next(error);
        }
    };
};