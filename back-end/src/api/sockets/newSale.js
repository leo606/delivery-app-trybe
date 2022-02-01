const { getById } = require('../../services/sales');

module.exports = (sale, io, onlineUsers) => {
  getById(sale.id).then((s) => {
    const user = onlineUsers.find(({ id }) => id === s.sellerId);

    if (user.socket) {
      console.log(user.socketId);
      user.socket.emit('newSale', s);
    }
  });
};