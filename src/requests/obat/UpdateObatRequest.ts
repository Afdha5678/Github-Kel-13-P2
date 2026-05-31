import { Request } from 'express'
import { z } from 'zod'
import { AppRequest } from '@/middlewares/formRequest'

export const UpdateObatRequest: AppRequest = {
    authorize: (req: Request) => {
        return (req as any).user?.role === 'OWNER'
    },
    rules: z.object({
        body: z.object({
            nama: z.string().min(2, 'Minimal 2 karakter').optional(),
            hargaJual: z.coerce.number().int().positive('Harga harus lebih dari 0').optional(),
            satuan: z.string().min(1, 'Satuan tidak boleh kosong').optional(),
            lokasiRak: z.string().optional().nullable().transform(val => val === '' ? null : val)
        }),
    }),
}