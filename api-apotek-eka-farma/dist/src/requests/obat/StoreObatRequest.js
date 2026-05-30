import { z } from 'zod';
export const StoreObatRequest = {
    authorize: (req) => {
        return req.user?.role === 'OWNER';
    },
    rules: z.object({
        body: z.object({
            nama: z.string().min(2, 'Minimal 2 karakter'),
            hargaJual: z.coerce.number().int().positive('Harga harus lebih dari 0'),
            satuan: z.string().min(1, 'Satuan tidak boleh kosong').optional(),
            lokasiRak: z.string().optional().nullable().transform(val => val === '' ? null : val)
        }),
    }),
};
