import { Router } from 'express';
import * as authController from '../../Controllers/authController.mjs';

const router = Router();

// /auth/signup
router.route('/signup')
.post(authController.signup);

// /auth/login
router.route('/login')
.post(authController.login);

export default router;