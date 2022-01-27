/* eslint-disable */
const Sequelize = require("sequelize");
const { sales, products, salesProducts } = require("../../database/models");

const environment = process.env.NODE_ENV || "test";
const sequelizeConfig = require("../../database/config/config");

const sequelize = new Sequelize(sequelizeConfig[environment]);

module.exports = async ({ userId, sellerId, productsList, total }) => {
  try {
    const sale = {
      user_id: userId,
      seller_id: sellerId,
      total_price: total,
      delivery_address: "address",
      delivery_number: "456456456",
      sale_date: new Date(Date.now()),
      status: "ordered",
    };

    const create = await sequelize.transaction(async (transaction) => {
      const createSale = await sales.create(sale, { transaction });
      const listedProducts = productsList.map(({ id, quantity }) => ({
        product_id: id,
        sale_id: createSale.id,
        quantity
      }));

      const createSalesProducts = await salesProducts.bulkCreate(
        listedProducts,
        { transaction }
      );
      return createSalesProducts
    });
    return create;
  } catch (e) {
    console.log(e);
  }
};