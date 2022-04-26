import * as Joi from 'joi';

const INCORRECT = 'Incorrect email or password';
const MUST_BE_FILED = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': INCORRECT,
    'any.required': MUST_BE_FILED,
    'string.empty': MUST_BE_FILED,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': INCORRECT,
    'any.required': MUST_BE_FILED,
    'string.empty': MUST_BE_FILED,
  }),
});

export default loginSchema;
