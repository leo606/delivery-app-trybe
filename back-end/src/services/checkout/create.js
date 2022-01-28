const Sequelize = require('sequelize');
const { sales, salesProducts } = require('../../database/models');

const environment = process.env.NODE_ENV || 'test';
const sequelizeConfig = require('../../database/config/config');

const sequelize = new Sequelize(sequelizeConfig[environment]);

module.exports = async ({ productsList, ...sale }) => {
  const newSale = { ...sale, status: 'ordered', saleDate: new Date(Date.now()) };

  try {
    const create = await sequelize.transaction(async (transaction) => {
      const createSale = await sales.create(newSale, { transaction });

      const listedProducts = productsList.map(({ id, quantity }) => ({
        productId: id,
        saleId: createSale.id,
        quantity,
      }));

      await salesProducts.bulkCreate(listedProducts, { transaction });
    });
    return create;
  } catch (e) {
    console.log(e);
  }
};