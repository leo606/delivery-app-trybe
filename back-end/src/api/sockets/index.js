const prepareHandler = require('./prepare');
const shipHandler = require('./ship');
const recivedHandler = require('./recived');

let onlineUsers = [];

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('newConn', (userData) => {
    onlineUsers.push({ ...userData, socketId: socket.id });
  });

  socket.on('prepare', (payload) => prepareHandler(payload, io, socket, onlineUsers));
  socket.on('ship', (payload) => shipHandler(payload, io, socket, onlineUsers));
  socket.on('recived', (payload) => recivedHandler(payload, io, socket, onlineUsers));

  socket.on('disconnect', () => {
    onlineUsers = [...onlineUsers.filter(({ socketId }) => socketId !== socket.id)];
  });
});