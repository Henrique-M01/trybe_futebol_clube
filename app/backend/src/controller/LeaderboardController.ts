import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

async function leaderboardHome(_req: Request, res: Response, next: NextFunction) {
  try {
    const teamsHome = await LeaderboardService.leaderboardHome();

    return res.status(200).json(teamsHome);
  } catch (e) {
    next(e);
  }
}

export default { leaderboardHome };
