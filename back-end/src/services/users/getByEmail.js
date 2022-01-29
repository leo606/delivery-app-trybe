const model = require('../../database/models');

module.exports = async (email) => {
  try {
    const user = await model.users.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return { err: { code: 'notFound', message: 'user not found' } };
    }
    return user.dataValues;
  } catch (e) {
    console.log(e);
  }
};