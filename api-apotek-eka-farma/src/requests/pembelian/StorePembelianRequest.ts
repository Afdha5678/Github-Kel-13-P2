import { Request } from 'express';
import { z } from 'zod';
import { AppRequest } from '@/middlewares/formRequest';

export const StorePembelianRequest: AppRequest = {
    authorize: (req: Request) => {
        return (req as any).user?.role === 'OWNER'; // Biasanya hanya OWNER yang bisa memesan ke supplier
    },
    rules: z.object({
        body: z.object({
            supplierId: z.string().uuid(),
            details: z.array(z.object({
                obatId: z.string().uuid(),
                quantityOrdered: z.number().int().positive(),
            })).min(1, 'Minimal satu barang dipesan')
        }),
    }),
};

export const ReceivePembelianRequest: AppRequest = {
    authorize: (req: Request) => {
        return (req as any).user != null;
    },
    rules: z.object({
        body: z.object({
            details: z.array(z.object({
                detailId: z.string().uuid(),
                quantityReceived: z.number().int().nonnegative(),
                tanggalKedaluwarsa: z.coerce.date().refine((date) => date > new Date(), {
                    message: 'Tanggal kedaluwarsa harus setelah hari ini',
                }).optional(), // Optional because quantityReceived might be 0
            })).min(1)
        }),
    }),
};
