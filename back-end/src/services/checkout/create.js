const Sequelize = require('sequelize');
const { sales, salesProducts } = require('../../database/models');

const environment = process.env.NODE_ENV || 'test';
const sequelizeConfig = require('../../database/config/config');

const sequelize = new Sequelize(sequelizeConfig[environment]);

function saleSerialize({ userId, sellerId, total }) {
  return {
      userId,
      sellerId,
      totalPrice: total,
      deliveryAddress: 'address',
      deliveryNumber: '456456456',
      saleDate: new Date(Date.now()),
      status: 'ordered',
  };
}

module.exports = async ({ productsList, ...saleData }) => {
  try {
    const sale = saleSerialize(saleData);
    const create = await sequelize.transaction(async (transaction) => {
      const createSale = await sales.create(sale, { transaction });

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