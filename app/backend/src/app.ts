import * as express from 'express';
import errorMIddleware from './middlewares/errorMIddlewares';
import leaderboardRoutes from './routes/LeaderboardRoutes';
import loginRouter from './routes/LoginRouter';
import matchesRouter from './routes/MatchesRouter';
import teamsRouter from './routes/TeamsRouter';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
    this.app.use('/leaderboard', leaderboardRoutes);
  }

  private errorHandler(): void {
    this.app.use(errorMIddleware);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
