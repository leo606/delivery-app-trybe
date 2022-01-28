const { sales, products, users } = require('../../database/models');

module.exports = async (id) => {
  try {
    const sale = await sales.findByPk(id, { include: [
      { model: products, as: 'products' },
      { model: users, as: 'seller' },
    ] });

    if (!sale) {
      return { err: { code: 'notFound', message: 'sale not found' } };
    }

    return sale;
  } catch (e) {
    console.log(e);
  }
};
