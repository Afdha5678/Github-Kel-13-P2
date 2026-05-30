-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'PEGAWAI');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PEGAWAI',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obat" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "hargaJual" INTEGER NOT NULL,
    "tanggalKedaluwarsa" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Obat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stok" (
    "id" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL DEFAULT 0,
    "obatId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stok_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Stok_obatId_key" ON "Stok"("obatId");

-- AddForeignKey
ALTER TABLE "Stok" ADD CONSTRAINT "Stok_obatId_fkey" FOREIGN KEY ("obatId") REFERENCES "Obat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
