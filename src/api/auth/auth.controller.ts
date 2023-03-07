import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

import User from '../../database/User';
import { signJwt } from '../../helpers/jwt';
import { loginUserSchema } from './auth.schema';

export const loginHandler = async (
  req: Request<{}, {}, loginUserSchema['body']>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOneBy({ email });

    if (!foundUser || !foundUser.active) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) return res.status(401).json({ message: 'Unauthorized' });

    const accessToken = signJwt(
      {
        UserInfo: {
          username: foundUser.username,
          role: foundUser.role,
        },
      },
      { expiresIn: '15m' }
    );

    const refreshToken = signJwt({ username: foundUser.username }, { expiresIn: '7d' });

    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ accessToken });
  } catch (err) {
    return next(err);
  }
};

export const logoutHandler = (req: Request, res: Response) => {
  const cookies = req.cookies as { jwt: string };

  if (!cookies?.jwt) return res.sendStatus(204);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: false });

  return res.json({ message: 'Cookie cleared' });
};
