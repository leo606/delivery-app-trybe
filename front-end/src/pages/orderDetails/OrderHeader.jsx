import React from 'react';
import PropTypes from 'prop-types';
import getSocket from '../../sockets/getSocket';

import formatSaleId from '../../helpers/formatSaleId';

const socket = getSocket();

function OrderHeader({ sale: { id, seller, status, saleDate } }) {
  function handleRecived() {
    socket.emit('recived', id);
  }
  return (
    <div className="order-details-header">
      <div data-testid="customer_order_details__element-order-details-label-order-id">
        {formatSaleId(id)}
      </div>
      <div data-testid="customer_order_details__element-order-details-label-seller-name">
        {seller.name}
      </div>
      <div data-testid="customer_order_details__element-order-details-label-order-date">
        {new Date(saleDate).toLocaleDateString('pt-BR')}
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </div>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled={ status !== 'Em Trânsito' }
        onClick={ handleRecived }
      >
        MARCAR COMO ENTREGUE
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
    // products: PropTypes.shape({
    //   name: PropTypes.string,
    //   price: PropTypes.string,
    //   map: PropTypes.func,
    // }),
  }).isRequired,
};

export default OrderHeader;
