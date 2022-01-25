const express = require('express');
const error = require('./middlewares/erros/error');

const app = express();

app.use(require('../controller'));

app.use(error);

module.exports = app;
