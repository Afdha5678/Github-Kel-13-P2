import { Request } from 'express';
import { z } from 'zod';
import { AppRequest } from '@/middlewares/formRequest';

export const UpdateSupplierRequest: AppRequest = {
    authorize: (req: Request) => {
        return (req as any).user?.role === 'OWNER' || (req as any).user?.role === 'PEGAWAI';
    },
    rules: z.object({
        body: z.object({
            nama: z.string().min(2, 'Minimal 2 karakter').optional(),
            alamat: z.string().min(5, 'Alamat minimal 5 karakter').optional(),
            telepon: z.string().min(8, 'Nomor telepon minimal 8 digit').optional(),
        }),
    }),
};
