/* eslint-disable */
const Sequelize = require("sequelize");
const { sales, products } = require("../../database/models");

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

    // const listedProducts = await products.findAll({
    //   where: { id: { [Sequelize.Op.in]: productsList.map((prod) => prod.id) } },
    // });
    const listedProducts = productsList.map((prod) => prod.id);
    const listedProductsQty = productsList.map((prod) => prod.quantity);

    const create = await sequelize.transaction(async (transaction) => {
      // create sale
      const createSale = await sales.create(sale, { transaction });

      // create salesProducts
      const salesProducts = await createSale.setProducts(listedProducts, {
        transaction,
        through: { quantity:  33}
      });
      console.log(salesProducts);
    });
    return create;
  } catch (e) {
    console.log(e);
  }
};
// sale from front:
// {
//   sellerId,
//   products: [{ id, quantity }, ...],
//   total,
// }

// sale:
// {
//   user_id: 2,
//   seller_id: 1,
//   total_price: 99.9,
//   delivery_address: "address",
//   delivery_number: "23",
//   sale_date: new Date(Date.now()),
//   status: "ordered",
// },

// product:
// {
//   name: "Becks 600ml",
//   price: 8.89,
//   url_image: "http://localhost:3001/images/beer.jpg",
// },
