const { Op } = require('sequelize');
const { users } = require('../../database/models');

module.exports = async () => {
  try {
    const sellers = await users.findAll({
      where: {
        [Op.not]: [{ role: 'administrator' }],
      },
      attributes: { exclude: ['password'] },
    });

    return sellers;
  } catch (e) {
    console.log(e);
    return {
      err: { code: 'internalServerError', message: 'something went wrong' },
    };
  }
};
