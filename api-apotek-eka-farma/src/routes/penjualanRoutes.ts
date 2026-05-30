import { Router } from 'express';
import * as penjualanController from '../controllers/penjualanController';
import { authenticateToken } from '../middlewares/authMiddleware';
import { formRequest } from '../middlewares/formRequest';
import { StorePenjualanRequest } from '../requests/penjualan/StorePenjualanRequest';

const router = Router();

router.post('/', authenticateToken, formRequest(StorePenjualanRequest), penjualanController.createPenjualan);
router.get('/', authenticateToken, penjualanController.getAllPenjualan);
router.get('/:id', authenticateToken, penjualanController.getPenjualanById);
router.delete('/:id', authenticateToken, penjualanController.deletePenjualan);

export default router;
