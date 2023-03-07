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
    console.log(duplicate);
    if (duplicate) return res.status(409).json({ message: 'Duplicate username' });

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = User.create({
      ...rest,
      username,
      password: hashedPwd,
    });

    await user.save();

    if (user) {
      return res.status(201).json({
        message: `New user ${username} created`,
        user: { user_id: user.user_id, email: user.email, username: user.username },
      });
    }

    return res.status(400).json({ message: 'Invalid user data received' });
  } catch (err) {
    return next(err);
  }
  // Check for duplicate username
};

export const getUserHandler = async (req: Request, res: Response) => {
  const users = await User.find();

  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' });
  }

  return res.json(users);
};
