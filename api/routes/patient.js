import { Router } from 'express';
import patientController from '../controllers/patient.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';

const router = Router();

router.route('/getAll').get(authenticateToken, asyncRoute(patientController.getAll));
router.route('/update').post(authenticateToken, asyncRoute(patientController.updateProfile));
router.route('/getPatient').get(authenticateToken, asyncRoute(patientController.getPatient));
export default router;
