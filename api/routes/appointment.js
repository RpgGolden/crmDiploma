import { Router } from 'express';
import appointmentController from '../controllers/appointment.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';

const router = Router();

router.route('/getAll').get(authenticateToken, asyncRoute(appointmentController.getAll));
router.route('/create').post(authenticateToken, asyncRoute(appointmentController.createAppointment));
router.route('/deleteAppointment/:id').delete(authenticateToken, asyncRoute(appointmentController.deleteAppointment));
export default router;
