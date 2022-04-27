import { NextFunction, Response, Request } from 'express';
import teamsService from '../services/TeamsService';

async function getAllTeams(_req: Request, res: Response, next: NextFunction) {
  try {
    const allTeams = await teamsService.getAll();

    if (!allTeams) return res.status(404).json({ message: 'Teams not found' });

    return res.status(200).json(allTeams);
  } catch (e) {
    next(e);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const teamById = await teamsService.getById(id);

    if (!teamById) return res.status(404).json({ message: 'Team not found' });

    return res.status(200).json(teamById);
  } catch (e) {
    next(e);
  }
}

export default { getAllTeams, getById };
