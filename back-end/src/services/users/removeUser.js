const { users } = require('../../database/models');

module.exports = async (id) => {
  try {
    const removed = await users.destroy({
      where: { id },
    });
    return removed;
  } catch (e) {
    console.log(e);
    return { err: { code: 'internalServerError', message: 'something went wrong' } };
  }
};