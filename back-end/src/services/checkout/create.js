const { sales } = require('../../database/models');

module.exports = async (sale) => {
  try {
    const create = await sales.create(sale);
    return create;
  } catch (e) {
    console.log(e);
  }
};
