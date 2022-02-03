import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatSaleId from '../../helpers/formatSaleId';
import formatCurrency from '../../helpers/formatCurrency';

function OrderCard({ order }) {
  const { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = order;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <button type="button" className="order-list-btn" onClick={ onClick }>
      <div className="order-list-btn-left">
        <div className="list-btn-order">
          <p>Pedido</p>
          <p data-testid={ `seller_orders__element-order-id-${id}` }>
            {formatSaleId(id)}
          </p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
            {status}
          </p>
        </div>
      </div>
      <div className="order-list-btn-right">
        <div
          className="list-btn-date"
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          {new Date(saleDate).toLocaleDateString('pt-BR')}
        </div>
        <div
          className="list-btn-value"
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          {`R$ ${formatCurrency(totalPrice)}`}
        </div>
        <div>
          <span data-testid={ `seller_orders__element-card-address-${id}` }>
            {`${deliveryAddress}, ${deliveryNumber}`}
          </span>
        </div>
      </div>
    </button>
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
