const { getById } = require('../../services/sales');

module.exports = (sale, io, onlineUsers) => {
  getById(sale.id).then((s) => {
    const user = onlineUsers.find(({ id }) => id === s.sellerId);

    if (user.socketId) {
      console.log(user.socketId);
      io.to(user.socketId).emit('newSale', s);
    }
  });
};