import { Router } from 'express';
import matchesController from '../controller/MatchesController';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.post('/', matchesController.createMatch);
matchesRouter.patch('/:id/finish', matchesController.updateMatchesFinish);

export default matchesRouter;
