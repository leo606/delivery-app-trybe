const model = require('../../database/models');

module.exports = async (email) => {
  try {
    const user = await model.users.findOne({
      where: { email },
    });
    if (!user) {
      return { err: { code: 'notFound' } };
    }
    return user.dataValues;
  } catch (e) {
    console.log(e);
  }
};