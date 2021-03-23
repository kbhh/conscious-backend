import Joi from 'joi';

const middleware = (schema, property1, property2) => {
  return (req, res, next) => {
    const Schema = property2 ? { ...req[property1], ...req[property2] } : { ...req[property1] };
    const { error } = Joi.validate(Schema, schema, { abortEarly: false });
    const valid = error == null;
    if (valid) {
      next();
    }
    else {
      const { details } = error;
      const messages = details.map(i => i.message).join(',')
      res.json({
        error: true,
        message: messages
      })
    }
  }
}
export default middleware;