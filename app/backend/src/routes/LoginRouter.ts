import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import { login, validateLogin as validLogin } from '../controller/LoginController';
import authMiddleware from '../middlewares/authMiddleware';

const loginRouter = Router();

loginRouter.get('/validate', authMiddleware, validLogin);
loginRouter.post('/', validateLogin, login);

export default loginRouter;
