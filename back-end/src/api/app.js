const express = require('express');
const error = require('./middlewares/errors/error');

const app = express();

app.use(express.json());

app.use(require('../controller'));

app.use(error);

module.exports = app;
