const { getById } = require('../../services/sales');

module.exports = (sale, onlineUsers) => {
  getById(sale.id).then((s) => {
    const user = onlineUsers.find(({ id }) => id === s.sellerId);
    if (user) {
      user.socket.emit('newSale', s);
    }
  });
};