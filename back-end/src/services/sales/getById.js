const { sales, products } = require('../../database/models');

module.exports = async (id) => {
  try {
    const sale = await sales.findByPk(id, { include: [
      { model: products, as: 'products' },
    ] });

    if (!sale) {
      return { err: { code: 'notFound', message: 'sale not found' } };
    }

    return sale;
  } catch (e) {
    console.log(e);
  }
};
