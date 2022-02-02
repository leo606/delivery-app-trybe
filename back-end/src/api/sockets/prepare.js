const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Preparando';

module.exports = ({ saleId, userId }, socket, onlineUsers) => {
  updateSaleStatus(saleId, SALE_STATUS)
    .then(() => {
      const user = onlineUsers.find((userOnline) => userOnline.id === userId);
      if (user) {
        user.socket.emit('saleStatus', { id: saleId, status: SALE_STATUS });
      }
      socket.emit('saleStatus', { id: saleId, status: SALE_STATUS });
  });
};
