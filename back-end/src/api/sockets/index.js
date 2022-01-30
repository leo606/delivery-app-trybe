const { updateSaleStatus } = require('../../services/sales');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('prepare', (id) => {
    updateSaleStatus(id, 'Preparando')
      .then(() => socket.emit('sellerStatus', 'Preparando'));
  });

  socket.on('ship', (id) => {
    updateSaleStatus(id, 'Em Trânsito')
      .then(() => socket.emit('sellerStatus', 'Em Trânsito'));
  });
});