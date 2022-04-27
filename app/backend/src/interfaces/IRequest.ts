import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IJWT extends JwtPayload {
  data?: string,
}

interface RequestWithToken extends Request {
  tokenData?: string | IJWT,
}

export default RequestWithToken;
