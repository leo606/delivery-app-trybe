const model = require('../../database/models');

module.exports = async ({ email, password }) => {
  try {
    const user = await model.users.findOne({ where: { email, password } });
    if (!user) {
      return { err: { code: 'notFound' } };
    }
    return user;
  } catch (e) {
    console.log(e);
  }
};