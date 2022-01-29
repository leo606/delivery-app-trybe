import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import formatSaleId from '../../helpers/formatSaleId';
import formatCurrency from '../../helpers/formatCurrency';

function OrderCard({ order }) {
  const { id, totalPrice, saleDate, status } = order;

  return (
    <Link to={ `${id}` }>
      <div>
        <div>
          <p>Pedido</p>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>
            {formatSaleId(id)}
          </p>
        </div>
        <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </div>
        <div data-testid={ `customer_orders__element-order-date-${id}` }>
          {new Date(saleDate).toLocaleDateString('pt-BR')}
        </div>
        <div data-testid={ `customer_orders__element-card-price-${id}` }>
          {formatCurrency(totalPrice)}
        </div>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
