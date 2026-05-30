"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivePembelianRequest = exports.StorePembelianRequest = void 0;
const zod_1 = require("zod");
exports.StorePembelianRequest = {
    authorize: (req) => {
        return req.user?.role === 'OWNER'; // Biasanya hanya OWNER yang bisa memesan ke supplier
    },
    rules: zod_1.z.object({
        body: zod_1.z.object({
            supplierId: zod_1.z.string().uuid(),
            details: zod_1.z.array(zod_1.z.object({
                obatId: zod_1.z.string().uuid(),
                quantityOrdered: zod_1.z.number().int().positive(),
            })).min(1, 'Minimal satu barang dipesan')
        }),
    }),
};
exports.ReceivePembelianRequest = {
    authorize: (req) => {
        return req.user != null;
    },
    rules: zod_1.z.object({
        body: zod_1.z.object({
            details: zod_1.z.array(zod_1.z.object({
                detailId: zod_1.z.string().uuid(),
                quantityReceived: zod_1.z.number().int().nonnegative(),
                tanggalKedaluwarsa: zod_1.z.coerce.date().refine((date) => date > new Date(), {
                    message: 'Tanggal kedaluwarsa harus setelah hari ini',
                }).optional(), // Optional because quantityReceived might be 0
            })).min(1)
        }),
    }),
};
