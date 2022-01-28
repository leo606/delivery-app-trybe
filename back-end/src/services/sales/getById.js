const { sale } = require('../../database/models');

module.exports = async (id) => {
  try {
    const findSale = await sale.findByPk(id);
    if (!findSale) {
      return { err: { code: 'notFound', message: 'sale not found' } };
    }
    return findSale;
  } catch (e) {
    console.log(e);
  }
};