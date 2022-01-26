const auth = require('./auth');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateUniqueEmail = require('./validateUniqueEmail');
const decode = require('./decode');

module.exports = {
  auth,
  validateLogin,
  validateRegister,
  validateUniqueEmail,
  decode,
};