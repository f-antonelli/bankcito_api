import express, { Request, Response } from 'express';

import auth from './auth/auth.routes';

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

export default router;
