const { sales } = require('../../database/models');

module.exports = async (id) => {
  const result = await sales.findAll({ where: { sellerId: id } });
  return result;
};
