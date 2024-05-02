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
router
    .route('/deletePatient/:patientId')
    .delete(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR])),
        asyncRoute(patientController.deletePatient)
    );
router
    .route('/createPatient')
    .post(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR])),
        asyncRoute(patientController.createPatient)
    );
router
    .route('/getDataPatient/:patientId')
    .get(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR])),
        asyncRoute(patientController.getDataPatient)
    );
router
    .route('/updatePatient/:patientId')
    .post(
        authenticateToken,
        asyncRoute(checkRole([role.ADMINISTRATOR, role.REGISTRATOR])),
        asyncRoute(patientController.updatePatient)
    );

export default router;
