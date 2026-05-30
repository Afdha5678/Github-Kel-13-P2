"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function main() {
    console.log('Menjalankan seeder...');
    // Buat password yang sudah di-hash
    const hashedPassword = await bcrypt_1.default.hash('owner123', 10);
    // upsert digunakan agar jika email sudah ada, tidak terjadi error (hanya di-update atau dilewati)
    const owner = await prisma_1.prisma.user.upsert({
        where: { email: 'owner@apotek.com' },
        update: {}, // Jika sudah ada, jangan lakukan apa-apa
        create: {
            nama: 'Owner Apotek',
            email: 'owner@apotek.com',
            password: hashedPassword,
            role: 'OWNER',
        },
    });
    console.log('✅ Seeding berhasil!');
    console.log('Akun Owner:');
    console.log(`- Email    : ${owner.email}`);
    console.log(`- Password : owner123`);
    console.log(`- Role     : ${owner.role}`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma_1.prisma.$disconnect();
});
