const express = require('express');
const cors = require('cors');
const error = require('./middlewares/errors/error');

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./controller'));

app.use(error);

module.exports = app;
