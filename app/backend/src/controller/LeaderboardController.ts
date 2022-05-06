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

async function leaderboardAway(_req: Request, res: Response, next: NextFunction) {
  try {
    const teamAway = await LeaderboardService.leaderboardAway();

    return res.status(200).json(teamAway);
  } catch (e) {
    next(e);
  }
}

async function leaderboardAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const allMatches = await LeaderboardService.leaderboardAll();

    return res.status(200).json(allMatches);
  } catch (e) {
    next(e);
  }
}

export default { leaderboardHome, leaderboardAway, leaderboardAll };
