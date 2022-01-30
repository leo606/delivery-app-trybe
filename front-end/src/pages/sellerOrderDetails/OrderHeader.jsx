import React from 'react';
import PropTypes from 'prop-types';
import getSocket from '../../sockets/getSocket';
import formatSaleId from '../../helpers/formatSaleId';

const socket = getSocket();

function OrderHeader({ sale: { id, status, saleDate } }) {
  function handlePrepare() {
    socket.emit('prepare', id);
  }
  function handleShip() {
    socket.emit('ship', id);
  }
  return (
    <div className="order-details-header">
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        {formatSaleId(id)}
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        {new Date(saleDate).toLocaleDateString('pt-BR')}
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </div>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ status !== 'Pendente' }
        onClick={ handlePrepare }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ status !== 'Preparando' }
        onClick={ handleShip }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

OrderHeader.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default OrderHeader;
