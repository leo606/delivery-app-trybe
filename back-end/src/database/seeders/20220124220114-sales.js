"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sales",
      [
        {
          user_id: 2,
          seller_id: 2,
          total_price: 99.9,
          delivery_address: "address",
          delivery_number: "23",
          sale_date: new Date(Date.now()),
          status: "ordered",
        },
        {
          user_id: 2,
          seller_id: 2,
          total_price: 99.9,
          delivery_address: "address two",
          delivery_number: "345",
          sale_date: new Date(Date.now()),
          status: "ordered",
        },
        {
          user_id: 2,
          seller_id: 2,
          total_price: 99.9,
          delivery_address: "address three",
          delivery_number: "7",
          sale_date: new Date(Date.now()),
          status: "finished",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
