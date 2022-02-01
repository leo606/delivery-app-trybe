const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Entregue';

module.exports = ({ saleId, sellerId }, io, socket, onlineUsers) => {
  const { socketId } = onlineUsers.find((user) => user.id === sellerId);
  console.log(socketId);
    if (socketId) {
      updateSaleStatus(saleId, SALE_STATUS)
        .then(() => {
          io.to(socketId).emit('saleStatus', { id: saleId, status: SALE_STATUS });
          socket.emit('saleStatus', { saleId, status: SALE_STATUS });
        });
    }
};