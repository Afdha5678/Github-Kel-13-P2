import { z } from 'zod';
export const StoreSupplierRequest = {
    authorize: (req) => {
        return req.user?.role === 'OWNER' || req.user?.role === 'PEGAWAI';
    },
    rules: z.object({
        body: z.object({
            nama: z.string().min(2, 'Minimal 2 karakter'),
            alamat: z.string().min(5, 'Alamat minimal 5 karakter'),
            telepon: z.string().min(8, 'Nomor telepon minimal 8 digit'),
        }),
    }),
};
