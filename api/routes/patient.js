import { Router } from 'express';
import patientController from '../controllers/patient.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';
import checkRole from '../middlewares/checkRoles.js';
import role from '../config/roles.js';
const router = Router();

router
    .route('/getAll')
    .get(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR])),
        asyncRoute(patientController.getAll)
    );
router
    .route('/update')
    .post(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR, role.PATIENT])),
        asyncRoute(patientController.updateProfile)
    );
router
    .route('/getPatient')
    .get(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR, role.PATIENT])),
        asyncRoute(patientController.getPatient)
    );
export default router;
