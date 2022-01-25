const express = require('express');
const model = require('../database/models');

const app = express();

app.get('/coffee', async (_req, res) => {
  const users = await model.users.findAll({
    include: [
      { model: model.sales, as: 'userSales' },
      { model: model.sales, as: 'sellerSales' },
    ],
  });
  res.status(200).json(users);
});

module.exports = app;
