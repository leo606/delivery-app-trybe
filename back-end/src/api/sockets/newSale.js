const { getById } = require('../../services/sales');

module.exports = (sale, io, onlineUsers) => {
  getById(sale.id).then((s) => {
    const sockets = onlineUsers.filter(({ id }) => id === s.userId || id === s.sellerId)
      .map(({ socketId }) => socketId);

    if (sockets.length) {
      console.log('emiting');
      const emited = io.to(sockets).emit('newSale', s);
      console.log(emited);
    }
  });
};