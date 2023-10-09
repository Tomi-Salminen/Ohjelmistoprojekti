const Joi = require("joi");

const AccountSchema = Joi.object().keys({
  username: Joi.string()
  .min(3)
  .max(100)
  .required()
  .pattern(new RegExp("[a-z A-Z]")),
  email: Joi.string()
    .min(4)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fi"] } })
    .required(),
  password: Joi.string()
    .min(8)
    .max(60)
    .required(),
});

module.exports = {
    AccountSchema,
};
