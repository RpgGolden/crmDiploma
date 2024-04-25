import { Router } from 'express';
import doctorController from '../controllers/doctor.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';

const router = Router();

router.route('/getAll').get(authenticateToken, asyncRoute(doctorController.getAll));
// router.route('/update').post(authenticateToken, asyncRoute(doctorController.updateProfile));

export default router;
