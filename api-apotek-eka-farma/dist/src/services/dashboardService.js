"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChartDataService = exports.getDashboardMetricsService = void 0;
const prisma_1 = require("../lib/prisma");
const getDashboardMetricsService = async () => {
    // 1. Total Jenis Obat
    const totalJenisObat = await prisma_1.prisma.obat.count();
    // 2. Stok Menipis (Total stok < 10 per obat)
    // Menggunakan query raw untuk performa (karena agregasi pada left join lebih efisien di SQL)
    const stokMenipisResult = await prisma_1.prisma.$queryRaw `
        SELECT COUNT(*) as "count" FROM (
            SELECT "Obat"."id"
            FROM "Obat"
            LEFT JOIN "Stok" ON "Obat"."id" = "Stok"."obatId"
            GROUP BY "Obat"."id"
            HAVING COALESCE(SUM("Stok"."jumlah"), 0) < 10
        ) as low_stock
    `;
    const stokMenipis = Number(stokMenipisResult[0]?.count || 0);
    // 3. Kedaluwarsa (30 Hari)
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    const now = new Date();
    const kedaluwarsa = await prisma_1.prisma.stok.count({
        where: {
            jumlah: { gt: 0 },
            tanggalKedaluwarsa: {
                lte: thirtyDaysFromNow,
                gte: now,
            }
        }
    });
    // 4. Aktivitas Terbaru (5 Transaksi Penjualan Terakhir)
    const aktivitasTerbaru = await prisma_1.prisma.transaksiPenjualan.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
            details: {
                include: {
                    obat: true
                }
            }
        }
    });
    return {
        totalJenisObat,
        stokMenipis,
        kedaluwarsa,
        aktivitasTerbaru
    };
};
exports.getDashboardMetricsService = getDashboardMetricsService;
const getChartDataService = async (filter) => {
    let result;
    if (filter === 'year') {
        result = await prisma_1.prisma.$queryRaw `
            SELECT TO_CHAR(DATE_TRUNC('month', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta'), 'YYYY-MM') as "date", SUM("total") as "total"
            FROM "TransaksiPenjualan"
            WHERE ("tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') >= (NOW() AT TIME ZONE 'Asia/Jakarta') - INTERVAL '1 year'
            GROUP BY DATE_TRUNC('month', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta')
            ORDER BY DATE_TRUNC('month', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') ASC
        `;
    }
    else if (filter === 'month') {
        result = await prisma_1.prisma.$queryRaw `
            SELECT TO_CHAR(DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta'), 'YYYY-MM-DD') as "date", SUM("total") as "total"
            FROM "TransaksiPenjualan"
            WHERE ("tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') >= (NOW() AT TIME ZONE 'Asia/Jakarta') - INTERVAL '30 days'
            GROUP BY DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta')
            ORDER BY DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') ASC
        `;
    }
    else { // week
        result = await prisma_1.prisma.$queryRaw `
            SELECT TO_CHAR(DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta'), 'YYYY-MM-DD') as "date", SUM("total") as "total"
            FROM "TransaksiPenjualan"
            WHERE ("tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') >= (NOW() AT TIME ZONE 'Asia/Jakarta') - INTERVAL '7 days'
            GROUP BY DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta')
            ORDER BY DATE_TRUNC('day', "tanggal" AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Jakarta') ASC
        `;
    }
    return result.map(row => ({
        date: row.date,
        total: Number(row.total || 0)
    }));
};
exports.getChartDataService = getChartDataService;
