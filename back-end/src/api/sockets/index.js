const prepareHandler = require('./prepare');
const shipHandler = require('./ship');
const recivedHandler = require('./recived');
const newSaleHandler = require('./newSale');

let onlineUsers = [];

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('newConn', (userData) => {
    onlineUsers.push({ ...userData, socket });
    console.log(onlineUsers);
  });

  socket.on('prepare', (payload) => prepareHandler(payload, io, socket, onlineUsers));
  socket.on('ship', (payload) => shipHandler(payload, io, socket, onlineUsers));
  socket.on('recived', (payload) => recivedHandler(payload, io, socket, onlineUsers));
  socket.on('newSale', (payload) => newSaleHandler(payload, io, onlineUsers));

  socket.on('disconnect', () => {
    onlineUsers = [...onlineUsers.filter(({ socketId }) => socketId !== socket.id)];
  });
});