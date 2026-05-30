"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreObatRequest = void 0;
const zod_1 = require("zod");
exports.StoreObatRequest = {
    authorize: (req) => {
        return req.user?.role === 'OWNER';
    },
    rules: zod_1.z.object({
        body: zod_1.z.object({
            nama: zod_1.z.string().min(2, 'Minimal 2 karakter'),
            hargaJual: zod_1.z.coerce.number().int().positive('Harga harus lebih dari 0'),
            satuan: zod_1.z.string().min(1, 'Satuan tidak boleh kosong').optional(),
            lokasiRak: zod_1.z.string().optional().nullable().transform(val => val === '' ? null : val)
        }),
    }),
};
