import { RequestHandler, Router } from 'express';

import validateRequest from '../../middleware/validate-request';
import { loginHandler, logoutHandler } from './auth.controller';
import { loginUserSchema } from './auth.schema';

const router = Router();

// GET
router.get('/refresh');

// POST
router.post('/', validateRequest(loginUserSchema), loginHandler as RequestHandler);
router.post('/logout', logoutHandler);

export default router;
