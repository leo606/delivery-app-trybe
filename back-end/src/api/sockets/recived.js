const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Entregue';

module.exports = ({ saleId, sellerId }, io, socket, onlineUsers) => {
  const { socket: socketUser } = onlineUsers.find((user) => user.id === sellerId);
    if (socketUser) {
      updateSaleStatus(saleId, SALE_STATUS)
        .then(() => {
          socketUser.emit('saleStatus', { id: saleId, status: SALE_STATUS });
          socket.emit('saleStatus', { saleId, status: SALE_STATUS });
        });
    }
};