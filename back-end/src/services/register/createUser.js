const model = require('../../database/models');

module.exports = async (data) => {
  try {
    const user = await model.users.create(data);
    return user.dataValues;
  } catch (e) {
    console.log(e);
  }
};
