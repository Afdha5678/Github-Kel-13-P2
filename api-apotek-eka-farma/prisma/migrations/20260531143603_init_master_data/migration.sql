-- AlterTable
ALTER TABLE "Obat" ADD COLUMN     "lokasiRak" TEXT,
ADD COLUMN     "satuan" TEXT NOT NULL DEFAULT 'Pcs';
