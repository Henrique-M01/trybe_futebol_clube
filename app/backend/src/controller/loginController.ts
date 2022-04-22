import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

export default async function login(req: Request, res: Response, _next: NextFunction) {
  try {
    const { email, password } = req.body;

    const validate = await loginService.validateLogin(email, password);

    if (!validate) return res.status(401).json({ message: 'User or password invalid' });

    return res.status(200).json(validate);
  } catch (e) {
    console.log(e);
  }
}
