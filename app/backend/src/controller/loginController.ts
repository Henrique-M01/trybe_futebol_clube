import { Request, Response, NextFunction } from 'express';
import RequestWithToken from '../interfaces/IRequest';
import loginService from '../services/loginService';

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const validate = await loginService.validateLogin(email, password);

    if (!validate) return res.status(401).json({ message: 'User or password invalid' });

    return res.status(200).json(validate);
  } catch (e) {
    next(e);
  }
}

async function validateLogin(req: RequestWithToken, res: Response, next: NextFunction) {
  try {
    // Logica do if contruida com ajuda do Leandro Oliveira.
    if (typeof req.tokenData !== 'string' && req.tokenData?.data) {
      return res.status(200).json(req.tokenData.data);
    }

    return res.status(500).json({ message: 'Token error' });
  } catch (e) {
    next(e);
  }
}

export {
  login,
  validateLogin,
};
