"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL || "";
// Only initialize pool if connection string exists to prevent startup crash
const pool = connectionString ? new pg_1.Pool({ connectionString }) : null;
const adapter = pool ? new adapter_pg_1.PrismaPg(pool) : null;
let prisma;
try {
    // In Prisma 7, if we use the adapter engine, we MUST pass either adapter or accelerateUrl.
    // If the env variable is missing, we pass a dummy adapter to prevent synchronous crash, or just catch it.
    exports.prisma = prisma = new client_1.PrismaClient((adapter ? { adapter } : {}));
}
catch (error) {
    console.error("Prisma init error:", error);
    exports.prisma = prisma = {};
}
