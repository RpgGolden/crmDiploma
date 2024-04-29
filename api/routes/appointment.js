import { Router } from 'express';
import appointmentController from '../controllers/appointment.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';
import checkRole from '../middlewares/checkRoles.js';
import role from '../config/roles.js';

const router = Router();

router
    .route('/getAll')
    .get(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR, role.PATIENT])),
        asyncRoute(appointmentController.getAll)
    );
router
    .route('/create')
    .post(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR, role.PATIENT])),
        asyncRoute(appointmentController.createAppointment)
    );
router
    .route('/deleteAppointment/:id')
    .delete(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR, role.PATIENT])),
        asyncRoute(appointmentController.deleteAppointment)
    );
export default router;
