const { users } = require('../../database/models');

module.exports = async () => {
  try {
    const sellers = await users.findAll({
      where: { role: 'seller' },
      attributes: ['id', 'name'],
    });

    return sellers;
  } catch (e) {
    console.log(e);
    return { err: { code: 'internalServerError', message: 'something went wrong' } };
  }
};