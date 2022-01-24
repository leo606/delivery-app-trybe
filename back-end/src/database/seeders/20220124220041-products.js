"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "products one",
          price: 33.33,
          url_image: "https://image.com",
        },
        {
          name: "products two",
          price: 34.88,
          url_image: "https://image.com",
        },
        {
          name: "products three",
          price: 12.54,
          url_image: "https://image.com",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
