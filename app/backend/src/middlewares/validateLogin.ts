import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/loginSchema';

async function validateLogin(req: Request, _res: Response, next: NextFunction) {
  try {
    await loginSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    next(e);
  }
}

export default validateLogin;
