import { Router } from 'express';
import doctorController from '../controllers/doctor.js';
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
        asyncRoute(doctorController.getAll)
    );
// router.route('/update').post(authenticateToken, asyncRoute(doctorController.updateProfile));

export default router;
