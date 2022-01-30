const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();
const http = require('http').createServer(app);
const error = require('./middlewares/errors/error');

const io = socketIo(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
require('./sockets')(io);

app.use(cors());

app.use(express.static(`${__dirname}/../../public`));

app.use(express.json());

app.use(require('./controller'));

app.use(error);

module.exports = http;
