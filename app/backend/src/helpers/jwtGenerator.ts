import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const JWT_CONFIG = {
  expiresIn: '1d',
};

const SECRET = fs.readFileSync('./jwt.evaluation.key');

export default function jwtGenerator(payload = {}): string {
  const token = jwt.sign({ data: payload }, SECRET, JWT_CONFIG);

  return token;
}
