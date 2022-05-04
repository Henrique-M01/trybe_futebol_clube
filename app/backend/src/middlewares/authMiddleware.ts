import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import RequestWithToken from '../interfaces/IRequest';

const SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

export default async (req: RequestWithToken, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, SECRET);

    req.tokenData = decoded;

    next();
  } catch (e) {
    next(e);
  }
};
