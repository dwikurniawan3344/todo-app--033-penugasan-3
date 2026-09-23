import { Router } from 'express';
import authRoutes from './authroutes';
import todoRoutes from './todoRoutes';
import { verifyToken } from '../middlewares/authmiddleware';

const router = Router();

router.use('/auth', authRoutes);
router.use('/todos', verifyToken, todoRoutes);

export default router;