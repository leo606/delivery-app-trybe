// const Sequelize = require('sequelize');
// const { sales } = require('../../database/models');

// const environment = process.env.NODE_ENV || 'test';
// const sequelizeConfig = require('../../database/config/config');

// const sequelize = new Sequelize(sequelizeConfig[environment]);

// module.exports = async (sale) => {
//   try {
//     const transaction = await sequelize.transaction(async () => {
//       // create sale
//       const createSale = await sales.create

//       // add sales-products
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
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
