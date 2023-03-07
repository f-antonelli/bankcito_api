import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, process.env.SECRET_KEY!, {
    ...(options && options),
  });
}

export function verifyJwt(token: string) {
  return jwt.verify(token, process.env.SECRET_KEY!);
}
