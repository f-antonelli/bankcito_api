import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validateRequest =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body as unknown,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(422);
        next(error.errors);
      }
    }
  };

export default validateRequest;
