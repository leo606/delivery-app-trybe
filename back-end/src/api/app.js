const express = require('express');
const model = require('../database/models');
const createRouter = require('../controller/users/create');
const error = require('./middlewares/erros/error');

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

app.use(require('../controller'));

app.use(error);

module.exports = app;
