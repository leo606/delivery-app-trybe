"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "kjsdaf@sdjdf.com",
          password: "asdf",
          role: "admin",
        },
        {
          name: "fulano sakjd",
          email: "dffsdf@fsdfsd.com",
          password: "asdf",
          role: "client",
        },
        {
          name: "ksjdhf sjdhf",
          email: "kjsdaf@dff.com",
          password: "asdf",
          role: "admin",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
