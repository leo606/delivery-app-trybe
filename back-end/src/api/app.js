const express = require('express');
const model = require('../database/models');

const app = express();

app.get('/coffee', async (_req, res) => {
  const users = await model.sales.findAll({
    include: [
      { model: model.users, as: 'user' },
    ],
  });
  res.status(200).json(users);
});

module.exports = app;
