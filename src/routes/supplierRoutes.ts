import { Router } from 'express';
import * as supplierController from '@/controllers/supplierController';
import { authenticateToken } from '@/middlewares/authMiddleware';
import { formRequest } from '@/middlewares/formRequest';
import { StoreSupplierRequest } from '@/requests/supplier/StoreSupplierRequest';

const router = Router();

router.post('/', authenticateToken, formRequest(StoreSupplierRequest), supplierController.createSupplier);
router.get('/', authenticateToken, supplierController.getAllSupplier);

export default router;
