import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-error';

/* eslint-disable @typescript-eslint/no-unused-vars */
function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : err.statusCode || 500;

  console.log(err.stack);
  res.status(statusCode);
  res.json({ message: err.message || err });
}

export default errorHandler;
