const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Em Trânsito';

module.exports = ({ saleId, userId }, io, socket, onlineUsers) => {
  const { socket: socketUser } = onlineUsers.find((user) => user.id === userId);
    if (socketUser) {
      updateSaleStatus(saleId, SALE_STATUS)
        .then(() => {
          socketUser.emit('saleStatus', { id: saleId, status: SALE_STATUS });
          socket.emit('saleStatus', { id: saleId, status: SALE_STATUS });
        });
    }
};