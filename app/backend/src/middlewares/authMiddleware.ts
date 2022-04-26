// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import * as fs from 'fs';

// const SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

// export default async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) return res.status(401).json({ message: 'Token not found' });

//     const decoded = jwt.verify(token, SECRET);

//     req.tokenData = decoded.data;

//     next();
//   } catch (e) {
//     console.log(e);
//   }
// };
