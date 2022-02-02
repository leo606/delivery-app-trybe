const getByEmail = require('./getByEmail');
const getByEmailAndPass = require('./getByEmailAndPass');
const create = require('./create');
const listSellers = require('./listSellers');
const listUsersNonAdmin = require('./listUsersNonAdmin');
const removeUser = require('./removeUser');

module.exports = {
  getByEmail,
  getByEmailAndPass,
  create,
  listSellers,
  listUsersNonAdmin,
  removeUser,
};