import { Router } from 'express';
import teamsController from '../controller/TeamsController';

const teamsRouter = Router();

teamsRouter.get('/:id', teamsController.getById);
teamsRouter.get('/', teamsController.getAllTeams);

export default teamsRouter;
