import { Router } from 'express';
import * as dashboardController from '@/controllers/dashboardController';
import { authenticateToken } from '@/middlewares/authMiddleware';

const router = Router();

router.get('/', authenticateToken, dashboardController.getDashboardMetrics);
router.get('/chart', authenticateToken, dashboardController.getChartData);
router.get('/top-selling', authenticateToken, dashboardController.getTopSellingObat);
router.get('/purchases-supplier', authenticateToken, dashboardController.getPembelianBySupplier);

export default router;
