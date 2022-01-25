const users = require('../../database/models/users');

const create = async (obj) => {
  const createUser = await users.create(obj);  

  return createUser;
};

module.exports = {
  create,
};