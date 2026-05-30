import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || "";

// Only initialize pool if connection string exists to prevent startup crash
const pool = connectionString ? new Pool({ connectionString }) : null;
const adapter = pool ? new PrismaPg(pool) : null;
let prisma: PrismaClient;
try {
  prisma = adapter ? new PrismaClient({ adapter }) : new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL || "postgresql://dummy:dummy@localhost:5432/dummy"
  });
} catch (error) {
  console.error("Prisma init error:", error);
  prisma = {} as any;
}

export { prisma };