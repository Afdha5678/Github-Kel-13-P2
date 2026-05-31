import { z } from 'zod';
export const StorePenjualanRequest = {
    authorize: (req) => {
        return req.user != null; // Semua yang login (OWNER/PEGAWAI) bisa jualan
    },
    rules: z.object({
        body: z.object({
            total: z.number().int().nonnegative('Total tidak boleh negatif'),
            details: z.array(z.object({
                obatId: z.string().uuid(),
                quantity: z.number().int().positive(),
                harga: z.number().int().positive(),
            })).min(1, 'Minimal satu barang terjual')
        }),
    }),
};
