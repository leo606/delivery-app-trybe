/*eslint-disable*/
const Sequelize = require('sequelize');
const { sales, products, salesProducts } = require('../../database/models');

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

module.exports = async ({productsList, ...saleData}) => {
  try {
    const sale = saleSerialize(saleData);

    const create = await sequelize.transaction(async (transaction) => {
      const createSale = await sales.create(sale, { transaction });
      const listedProducts = productsList.map(({ id, quantity }) => ({
        product_id: id,
        sale_id: createSale.id,
        quantity,
      }));
      const createSalesProducts = await salesProducts.bulkCreate(
        listedProducts,
        { transaction },
      );
      return createSalesProducts;
    });
    return create;
  } catch (e) {
    console.log(e);
  }
};