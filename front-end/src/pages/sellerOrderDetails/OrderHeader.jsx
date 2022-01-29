import React from 'react';
import PropTypes from 'prop-types';

import formatSaleId from '../../helpers/formatSaleId';

function OrderHeader({ sale: { id, status, saleDate } }) {
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
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled
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
