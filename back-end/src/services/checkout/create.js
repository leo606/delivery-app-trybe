const Sequelize = require('sequelize');
const { sales, salesProducts } = require('../../database/models');

const environment = process.env.NODE_ENV || 'test';
const sequelizeConfig = require('../../database/config/config');

const sequelize = new Sequelize(sequelizeConfig[environment]);

const productsSerialize = (products, saleId) => products.map(({ id, quantity }) => ({
  productId: id,
  saleId,
  quantity,
}));

module.exports = async ({ productsList, ...sale }) => {
  const newSale = { ...sale, status: 'Pendente', saleDate: new Date(Date.now()) };

  try {
    const create = await sequelize.transaction(async (transaction) => {
      const createSale = await sales.create(newSale, { transaction });

      const listedProducts = productsSerialize(productsList, createSale.id);

      await salesProducts.bulkCreate(listedProducts, { transaction });
      return createSale;
    });
    if (create.id) {
      return create.id;
    }
      return { err: { code: 'internalServerError', message: 'something went wrong' } };
  } catch (e) {
    console.log(e);
  }
};