import { Router } from 'express';
import authController from '../controllers/auth.js';
import { asyncRoute } from '../utils/errors.js';

const router = Router();

router.route('/register').post(asyncRoute(authController.register));

router.route('/login').post(asyncRoute(authController.login));

router.route('/logout').post(asyncRoute(authController.logout));

router.route('/refresh').post(asyncRoute(authController.refresh));

export default router;
