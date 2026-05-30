"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSupplierRequest = void 0;
const zod_1 = require("zod");
exports.StoreSupplierRequest = {
    authorize: (req) => {
        return req.user?.role === 'OWNER' || req.user?.role === 'PEGAWAI';
    },
    rules: zod_1.z.object({
        body: zod_1.z.object({
            nama: zod_1.z.string().min(2, 'Minimal 2 karakter'),
            alamat: zod_1.z.string().min(5, 'Alamat minimal 5 karakter'),
            telepon: zod_1.z.string().min(8, 'Nomor telepon minimal 8 digit'),
        }),
    }),
};
