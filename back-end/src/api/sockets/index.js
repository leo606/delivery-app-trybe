const { updateSaleStatus } = require('../../services/sales');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('prepare', (id) => {
    updateSaleStatus(id, 'Preparando')
      .then(() => io.emit('saleStatus', { id, status: 'Preparando' }));
  });

  socket.on('ship', (id) => {
    updateSaleStatus(id, 'Em Trânsito')
      .then(() => io.emit('saleStatus', { id, status: 'Em Trânsito' }));
  });

  socket.on('recived', (id) => {
    updateSaleStatus(id, 'Entregue')
      .then(() => io.emit('saleStatus', { id, status: 'Entregue' }));
  });
});