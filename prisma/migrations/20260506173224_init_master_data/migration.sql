/*
  Warnings:

  - You are about to drop the column `tanggalKedaluwarsa` on the `Obat` table. All the data in the column will be lost.
  - Added the required column `tanggalKedaluwarsa` to the `Stok` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('IN', 'OUT', 'ADJUSTMENT');

-- DropIndex
DROP INDEX "Stok_obatId_key";

-- AlterTable
ALTER TABLE "Obat" DROP COLUMN "tanggalKedaluwarsa",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Stok" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tanggalKedaluwarsa" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordExpires" TIMESTAMP(3),
ADD COLUMN     "resetPasswordToken" TEXT;

-- CreateTable
CREATE TABLE "StockMovement" (
    "id" TEXT NOT NULL,
    "type" "MovementType" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stokId" TEXT NOT NULL,

    CONSTRAINT "StockMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransaksiPenjualan" (
    "id" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransaksiPenjualan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPenjualan" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL,
    "transaksiId" TEXT NOT NULL,
    "obatId" TEXT NOT NULL,

    CONSTRAINT "DetailPenjualan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransaksiPembelian" (
    "id" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransaksiPembelian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPembelian" (
    "id" TEXT NOT NULL,
    "quantityOrdered" INTEGER NOT NULL,
    "quantityReceived" INTEGER NOT NULL,
    "transaksiId" TEXT NOT NULL,
    "obatId" TEXT NOT NULL,

    CONSTRAINT "DetailPembelian_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_stokId_fkey" FOREIGN KEY ("stokId") REFERENCES "Stok"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_transaksiId_fkey" FOREIGN KEY ("transaksiId") REFERENCES "TransaksiPenjualan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPenjualan" ADD CONSTRAINT "DetailPenjualan_obatId_fkey" FOREIGN KEY ("obatId") REFERENCES "Obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransaksiPembelian" ADD CONSTRAINT "TransaksiPembelian_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPembelian" ADD CONSTRAINT "DetailPembelian_transaksiId_fkey" FOREIGN KEY ("transaksiId") REFERENCES "TransaksiPembelian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPembelian" ADD CONSTRAINT "DetailPembelian_obatId_fkey" FOREIGN KEY ("obatId") REFERENCES "Obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
