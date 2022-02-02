const { updateSaleStatus } = require('../../services/sales');

const SALE_STATUS = 'Entregue';

module.exports = ({ saleId, sellerId }, socket, onlineUsers) => {
  updateSaleStatus(saleId, SALE_STATUS)
    .then(() => {
      const seller = onlineUsers.find((sellerOnline) => sellerOnline.id === sellerId);
      if (seller) {
        seller.socket.emit('saleStatus', { id: saleId, status: SALE_STATUS });
      }
      socket.emit('saleStatus', { saleId, status: SALE_STATUS });
    });
};
