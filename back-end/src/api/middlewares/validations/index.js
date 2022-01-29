const auth = require('./auth');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateAdminRegister = require('./validateAdminRegister');
const validateUniqueEmail = require('./validateUniqueEmail');
const decode = require('./decode');

module.exports = {
  auth,
  validateLogin,
  validateRegister,
  validateAdminRegister,
  validateUniqueEmail,
  decode,
};