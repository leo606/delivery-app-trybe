const { sales } = require('../../database/models');

module.exports = async (userId) => {
  try {
    const orders = await sales.findAll({
      where: { userId },
    });
    return orders;
  } catch (e) {
    console.log(e);
  }
};