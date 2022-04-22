import jwtGenerator from '../helpers/jwtGenerator';
import Users from '../database/models/UsersModel';

async function validateLogin(email: string, _password: string) {
  const userExist = await Users.findOne({
    where: { email }, attributes: { exclude: ['password'] } });

  if (!userExist) return false;

  const token = jwtGenerator({ email });

  return { user: userExist.dataValues, token };
}

export default {
  validateLogin,
};
