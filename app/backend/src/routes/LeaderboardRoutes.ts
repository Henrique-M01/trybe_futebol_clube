import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRoutes = Router();

leaderboardRoutes.get('/home', LeaderboardController.leaderboardHome);

export default leaderboardRoutes;
