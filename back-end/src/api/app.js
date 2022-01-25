const express = require('express');
const error = require('./middlewares/erros/error');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(require('../controller'));

app.use(error);

module.exports = app;
