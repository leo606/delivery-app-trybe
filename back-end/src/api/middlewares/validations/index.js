const auth = require('./auth');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateUniqueEmail = require('./validateUniqueEmail');

module.exports = {
  auth,
  validateLogin,
  validateRegister,
  validateUniqueEmail,
};