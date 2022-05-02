import { Router } from 'express';
import matchesController from '../controller/MatchesController';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;
