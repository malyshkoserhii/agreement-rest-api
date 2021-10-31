const Joi = require('joi');

const schemaCreateOrUpdateContract = Joi.object({
  name: Joi.string().min(3).max(60).trim(false).required(),
  company: Joi.string().min(3).max(80).required(),
  date: Joi.string().min(3).max(30).required(),
  expiration: Joi.string().min(3).max(30).required(),
  description: Joi.string().trim(false),
  sum: Joi.string().alphanum().min(3).max(30).required(),
  currency: Joi.string().required(),
  type: Joi.object({
    buyer: Joi.boolean(),
    seller: Joi.boolean(),
  }),
  manager: Joi.array()
    .items(
      Joi.object({
        first_name: Joi.string().min(3).max(20).required(),
        last_name: Joi.string().min(3).max(20).required(),
        position: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(3).max(15).required(),
        email: Joi.string()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net', 'ua', 'uk'] },
          })
          .required(),
      })
    )
    .required(),
  original: Joi.boolean(),
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: 400,
      message: `Filed: ${message.replace(/"/g, '')}`,
    });
  }
  next();
};

module.exports.createContact = (req, res, next) => {
  return validate(schemaCreateOrUpdateContract, req.body, next);
};

module.exports.updateContact = (req, res, next) => {
  return validate(schemaCreateOrUpdateContract, req.body, next);
};
