"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePenjualanRequest = void 0;
const zod_1 = require("zod");
exports.StorePenjualanRequest = {
    authorize: (req) => {
        return req.user != null; // Semua yang login (OWNER/PEGAWAI) bisa jualan
    },
    rules: zod_1.z.object({
        body: zod_1.z.object({
            total: zod_1.z.number().int().nonnegative('Total tidak boleh negatif'),
            details: zod_1.z.array(zod_1.z.object({
                obatId: zod_1.z.string().uuid(),
                quantity: zod_1.z.number().int().positive(),
                harga: zod_1.z.number().int().positive(),
            })).min(1, 'Minimal satu barang terjual')
        }),
    }),
};
