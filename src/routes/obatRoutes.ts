import { Router } from 'express'
import * as obatController from '@/controllers/obatController'
import { authenticateToken } from '@/middlewares/authMiddleware'
import { formRequest } from '@/middlewares/formRequest'
import { StoreObatRequest } from '@/requests/obat/StoreObatRequest'
import { UpdateObatRequest } from '@/requests/obat/UpdateObatRequest'

const router = Router()

router.post(
    '/',
    authenticateToken,
    formRequest(StoreObatRequest),
    obatController.createObat
)

router.get(
    '/',
    authenticateToken,
    obatController.getAllObat
)

router.get(
    '/kedaluwarsa',
    authenticateToken,
    obatController.checkObatKedaluwarsa
)

router.get(
    '/:id',
    authenticateToken,
    obatController.getObatById
)

router.put(
    '/:id',
    authenticateToken,
    formRequest(UpdateObatRequest),
    obatController.updateObat
)

router.delete(
    '/:id',
    authenticateToken,
    obatController.deleteObat
)

export default router