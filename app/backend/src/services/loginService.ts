import * as bcrypt from 'bcrypt';
import jwtGenerator from '../helpers/jwtGenerator';
import Users from '../database/models/UsersModel';

async function validateLogin(email: string, password: string) {
  const userExist = await Users.findOne({
    where: { email } });

  if (!userExist) return false;

  const passwordDB = userExist.dataValues.password;

  const validate = await bcrypt.compare(password, passwordDB as string);

  if (!validate) return false;

  delete userExist.dataValues.password;

  const token = jwtGenerator({ email });

  return { user: userExist.dataValues, token };
}

export default {
  validateLogin,
};
