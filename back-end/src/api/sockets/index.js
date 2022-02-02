const prepareHandler = require('./prepare');
const shipHandler = require('./ship');
const recivedHandler = require('./recived');
const newSaleHandler = require('./newSale');

let onlineUsers = [];

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('newConn', (userData) => {
    onlineUsers.push({ ...userData, socket });
  });

  socket.on('prepare', (payload) => prepareHandler(payload, socket, onlineUsers));
  socket.on('ship', (payload) => shipHandler(payload, socket, onlineUsers));
  socket.on('recived', (payload) => recivedHandler(payload, socket, onlineUsers));
  socket.on('newSale', (payload) => newSaleHandler(payload, onlineUsers));

  socket.on('disconnect', () => {
    onlineUsers = [...onlineUsers.filter(({ socket: { id } }) => id !== socket.id)];
  });
});