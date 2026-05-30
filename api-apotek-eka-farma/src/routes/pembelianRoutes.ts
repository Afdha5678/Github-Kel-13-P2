import { Router } from 'express';
import * as pembelianController from '../controllers/pembelianController';
import { authenticateToken } from '../middlewares/authMiddleware';
import { formRequest } from '../middlewares/formRequest';
import { StorePembelianRequest, ReceivePembelianRequest } from '../requests/pembelian/StorePembelianRequest';

const router = Router();

router.post('/', authenticateToken, formRequest(StorePembelianRequest), pembelianController.createPembelian);
router.get('/', authenticateToken, pembelianController.getAllPembelian);
router.get('/:id', authenticateToken, pembelianController.getPembelianById);
router.post('/:id/receive', authenticateToken, formRequest(ReceivePembelianRequest), pembelianController.receivePembelian);
router.delete('/:id', authenticateToken, pembelianController.deletePembelian);

export default router;
