import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import login from '../controller/loginController';

const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

export default loginRouter;
