import { NextFunction, Request, Response } from 'express';
import IErrorRequestWithDetails from '../interfaces/IErrorRequest';

function errorMIddleware(
  err: IErrorRequestWithDetails,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err.details) {
    const [error] = err.details;
    const { message, type } = error;
    if (type === 'string.email' || type === 'string.min') {
      return res.status(401).json({ message });
    }

    return res.status(400).json({ message });
  }

  return res.status(500).json(err.message);
}

export default errorMIddleware;
