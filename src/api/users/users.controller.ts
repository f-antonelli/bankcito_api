import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

import User from '../../database/User';
import { createUserSchema } from './users.schema';

export const createUserHandler = async (
  req: Request<{}, {}, createUserSchema['body']>,
  res: Response,
  next: NextFunction
) => {
  const { password, username, ...rest } = req.body;

  try {
    const duplicate = await User.findOneBy({ username });

    if (duplicate) return res.status(409).json({ message: 'Duplicate username' });

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = User.create({
      ...rest,
      username,
      password: hashedPwd,
    });

    if (user) return res.status(201).json({ message: `New user ${username} created` });

    return res.status(400).json({ message: 'Invalid user data received' });
  } catch (err) {
    return next(err);
  }
  // Check for duplicate username
};

export const getUserHandler = (req: Request, res: Response) => {
  res.send(200);
};
