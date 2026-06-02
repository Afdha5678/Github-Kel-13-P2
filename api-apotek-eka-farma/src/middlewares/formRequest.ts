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
            const validatedData = (await requestClass.rules.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            })) as any;

            // Update req object with coerced values from Zod (e.g. string to number)
            if (validatedData.body !== undefined) req.body = validatedData.body;
            if (validatedData.query !== undefined) req.query = validatedData.query;
            if (validatedData.params !== undefined) req.params = validatedData.params;

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