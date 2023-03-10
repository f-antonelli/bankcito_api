import express, { Request, Response } from 'express';

import auth from './auth/auth.routes';
import users from './users/users.routes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API :)',
  });
});

//  healtcheck
router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

//  swagger

//  API routes
router.use('/auth', auth);
router.use('/users', users);

export default router;
