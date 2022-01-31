/*eslint-disable*/
const { updateSaleStatus } = require('../../services/sales');

let onlineUsers = [];

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('newConn', (userData) => {
    onlineUsers.push({ ...userData, socketId: socket.id })
  });

  socket.on('prepare', ({ saleId, userId }) => {
    const user = onlineUsers.find((user) => user.id === userId);
    console.log(user);
    if (user) {
      updateSaleStatus(saleId, 'Preparando')
        .then(() => {
          io.to(user.socketId).emit('saleStatus', { status: 'Preparando' })
          socket.emit('saleStatus', {status: 'Preparando'})
        });
    }
  });

  socket.on('ship', ({ saleId, userId }) => {
    const { socketId } = onlineUsers.find((user) => user.id === userId);
    if (socketId) {
      updateSaleStatus(saleId, 'Em Trânsito')
        .then(() => {
          io.to(socketId).emit('saleStatus', { status: 'Em Trânsito' })
          socket.emit('saleStatus',  { status: 'Em Trânsito' })
        });
    }
  });

  socket.on('recived', ({ saleId, sellerId }) => {
    const { socketId } = onlineUsers.find((user) => user.id === sellerId);
    if (socketId) {
      updateSaleStatus(saleId, 'Entregue')
        .then(() => {
          io.to(socketId).emit('saleStatus', { saleId, status: 'Entregue' })
          socket.emit("saleStatus", {saleId, status: 'Entregue'})
        });
    }
  });

  socket.on('disconnect', ()=>{
    onlineUsers = [...onlineUsers.filter(({socketId})=> socketId !== socket.id)]
  })
});