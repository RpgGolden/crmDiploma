import { Router } from 'express';
import patientController from '../controllers/patient.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';

const router = Router();

router.route('/getAll').get(authenticateToken, asyncRoute(patientController.getAll));

export default router;
