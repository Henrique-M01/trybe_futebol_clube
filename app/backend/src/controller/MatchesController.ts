import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const allMatches = await MatchesService.getAll();
    console.log(allMatches);
    if (!allMatches) return res.status(404).json({ message: 'Matches not found' });

    return res.status(200).json(allMatches);
  } catch (e) {
    next(e);
  }
}

export default { getAll };
