const joi = require('joi');

const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const registerSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().min(12).required(),
});

const registerAdminSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  name: joi.string().min(12).required(),
  role: joi.string().required(),
});

module.exports = {
  loginSchema,
  registerSchema,
  registerAdminSchema,
};