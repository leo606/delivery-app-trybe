const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Preparando';

module.exports = ({ saleId, userId }, io, socket, onlineUsers) => {
  const user = onlineUsers.find((userOnline) => userOnline.id === userId);
    if (user) {
      updateSaleStatus(saleId, SALE_STATUS)
        .then(() => {
          io.to(user.socketId).emit('saleStatus', { status: SALE_STATUS });
          socket.emit('saleStatus', { status: SALE_STATUS });
        });
    }
};