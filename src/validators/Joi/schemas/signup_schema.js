import Joi from 'joi'; 

const schemas = {
  SignUpSchema: Joi.object().keys({
    fullName: Joi.string().required().error(() => 'fullName field is required!'),
    mobileNumber: Joi.string().required().error(() => 'mobile Number must be a string'),
    password: Joi.string().required().error(() => 'Password must be a string'),
    confirmPassword: Joi.string().required().error(() => 'Confirmation must be a string'),
    email: Joi.string().email().required().error(() => 'Email is not in the correct format')
  })
};

export default schemas;
