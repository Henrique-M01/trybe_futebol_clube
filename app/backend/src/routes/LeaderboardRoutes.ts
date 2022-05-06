import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRoutes = Router();

leaderboardRoutes.get('/', LeaderboardController.leaderboardAll);
leaderboardRoutes.get('/home', LeaderboardController.leaderboardHome);
leaderboardRoutes.get('/away', LeaderboardController.leaderboardAway);

export default leaderboardRoutes;
