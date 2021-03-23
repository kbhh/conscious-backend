let Joi = require('joi')
const schemas = {
  SignUpSchema: Joi.object().keys({
    fullName: Joi.string().required().error(() => 'fullName field is required!'),
    // userId: Joi.string().required().error(() => 'User Id is required!'),
    role: Joi.string().required().error(() => 'Role is required!'),
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    password: Joi.string().required().error(() => 'Password must be a string'),
    confirmPassword: Joi.string().required().error(() => 'Confirmation must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format')
  }),
  LoginSchema: Joi.object().keys({
    password: Joi.string().required().error(() => 'Password must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format')
  }),
  SignUpbyRebSchema: Joi.object().keys({
    fullName: Joi.string().required().error(() => 'fullName field is required!'),
    userId: Joi.string().required().error(() => 'User Id is required!'),
    role: Joi.string().required().error(() => 'Role is required!'),
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    password: Joi.string().required().error(() => 'Password must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format')
  }),
  SignUpUpdateSchema: Joi.object().keys({
    fullName: Joi.string().required().error(() => 'fullName field is required!'),
    userId: Joi.string().required().error(() => 'User Id is required!'),
    role: Joi.string().required().error(() => 'Role is required!'),
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format'),
  }),
  SelfSignUpSchema: Joi.object().keys({
    fullName: Joi.string().required().error(() => 'fullName field is required!'),
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    password: Joi.string().required().error(() => 'Password must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format'),
    userId: Joi.string().required().error(() => 'User Id is required!')
  }),
  ResetSchema: Joi.object().keys({
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format')
  })
};
export default schemas;
