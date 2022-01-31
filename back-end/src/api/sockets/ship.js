const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Em Trânsito';

module.exports = ({ saleId, userId }, io, socket, onlineUsers) => {
  const { socketId } = onlineUsers.find((user) => user.id === userId);
    if (socketId) {
      updateSaleStatus(saleId, SALE_STATUS)
        .then(() => {
          io.to(socketId).emit('saleStatus', { status: SALE_STATUS });
          socket.emit('saleStatus', { status: SALE_STATUS });
        });
    }
};