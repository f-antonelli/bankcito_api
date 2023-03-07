import { RequestHandler, Router } from 'express';

import validateRequest from '../../middleware/validate-request';
import { createUserHandler, getUserHandler } from './users.controller';
import { createUserSchema } from './users.schema';

const router = Router();

// GET
router.get('/', getUserHandler as RequestHandler);

// POST
router.post('/', validateRequest(createUserSchema), createUserHandler as RequestHandler);

// PATCH
router.patch('/');

// DELETE
router.delete('/');

export default router;
