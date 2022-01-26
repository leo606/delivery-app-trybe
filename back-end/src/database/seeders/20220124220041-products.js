"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Skol Lata 250ml",
          price: 2.20,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Heineken 600ml",
          price: 7.50,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Antarctica Pilsen 300ml",
          price: 2.49,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Brahma 600ml",
          price: 7.50,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Skol 269ml",
          price: 2.19,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Skol Beats Senses 313ml",
          price: 4.49,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Becks 330ml",
          price: 4.99,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Brahma Duplo Malte 350ml",
          price: 2.79,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Becks 600ml",
          price: 8.89,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Skol Beats Senses 269ml",
          price: 3.57,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
        {
          name: "Stella Artois 275ml",
          price: 3.49,
          url_image: "http://localhost:3001/images/beer.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
