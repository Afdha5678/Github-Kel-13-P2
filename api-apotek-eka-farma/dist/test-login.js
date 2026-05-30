"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_1 = require("./src/lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function main() {
    const email = 'owner@apotek.com';
    const password = 'owner123';
    console.log(`Checking user: ${email}`);
    const user = await prisma_1.prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        console.log('User not found in DB!');
        return;
    }
    console.log('User found:', user.email, user.role);
    const isValid = await bcrypt_1.default.compare(password, user.password);
    console.log('Password valid?', isValid);
}
main().catch(console.error).finally(() => prisma_1.prisma.$disconnect());
