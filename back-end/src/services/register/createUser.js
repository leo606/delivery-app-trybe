const model = require('../../database/models');

module.exports = async (obj) => {
  try {
    const { encryptedPassword, name, email, role } = obj;
    const password = encryptedPassword;
    const data = {
      password,
      name,
      email,
      role,
    };
    const user = await model.users.create(data);
    return user.dataValues;
  } catch (e) {
    console.log(e);
  }
};
