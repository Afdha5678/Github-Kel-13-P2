import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/client";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || "";

// Only initialize pool if connection string exists to prevent startup crash
const pool = connectionString ? new Pool({ connectionString }) : null;
const adapter = pool ? new PrismaPg(pool) : null;
let prisma: PrismaClient;
try {
  // In Prisma 7, if we use the adapter engine, we MUST pass either adapter or accelerateUrl.
  // If the env variable is missing, we pass a dummy adapter to prevent synchronous crash, or just catch it.
  prisma = new PrismaClient((adapter ? { adapter } : {}) as any);
} catch (error) {
  console.error("Prisma init error:", error);
  prisma = {} as any;
}

export { prisma };