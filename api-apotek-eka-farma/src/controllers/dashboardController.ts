import { Request, Response } from 'express';
import * as dashboardService from '@/services/dashboardService';

export const getDashboardMetrics = async (req: Request, res: Response) => {
    try {
        const data = await dashboardService.getDashboardMetricsService();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Dashboard error:", error);
        res.status(500).json({ success: false, message: 'Gagal mengambil data dashboard' });
    }
};

export const getChartData = async (req: Request, res: Response) => {
    try {
        const filter = (req.query.filter as 'week' | 'month' | 'year') || 'week';
        const data = await dashboardService.getChartDataService(filter);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Chart error:", error);
        res.status(500).json({ success: false, message: 'Gagal mengambil data grafik' });
    }
};
