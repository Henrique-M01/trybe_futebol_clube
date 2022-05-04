import { NextFunction, Response, Request } from 'express';
import MatchesService from '../services/MatchesService';

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const allMatches = await MatchesService.getAll();

    if (!allMatches) return res.status(404).json({ message: 'Matches not found' });

    return res.status(200).json(allMatches);
  } catch (e) {
    next(e);
  }
}

async function createMatch(req: Request, res: Response, next: NextFunction) {
  try {
    const create = await MatchesService.createMatch(req.body);

    if (create === null) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    if (create === false) {
      return res.status(401).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    return res.status(201).json(create);
  } catch (e) {
    next(e);
  }
}

async function updateMatchesFinish(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    await MatchesService.updateMatchesFinish(id);

    return res.status(200).json({ message: 'Update match succes' });
  } catch (e) {
    next(e);
  }
}

async function updateInProgress(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const update = await MatchesService.updateInProgress(id, homeTeamGoals, awayTeamGoals);

    if (!update) return res.status(400).json({ message: 'Update status in progress failed' });

    return res.status(200).json({ message: 'Successfully updated' });
  } catch (e) {
    next(e);
  }
}

export default { getAll, createMatch, updateMatchesFinish, updateInProgress };
