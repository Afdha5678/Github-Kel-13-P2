import { Router } from 'express';
import * as userController from '../controllers/userController';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware';
const router = Router();
// Profile Routes (Available for all authenticated users)
router.get('/profile', authenticateToken, userController.getProfile);
router.put('/profile', authenticateToken, userController.updateProfile);
// User Management Routes (Only for OWNER)
router.get('/', authenticateToken, authorizeRole(['OWNER']), userController.getAllUsers);
router.post('/', authenticateToken, authorizeRole(['OWNER']), userController.createUser);
router.get('/:id', authenticateToken, authorizeRole(['OWNER']), userController.getUserById);
router.put('/:id', authenticateToken, authorizeRole(['OWNER']), userController.updateUserRole);
router.delete('/:id', authenticateToken, authorizeRole(['OWNER']), userController.deleteUser);
export default router;
