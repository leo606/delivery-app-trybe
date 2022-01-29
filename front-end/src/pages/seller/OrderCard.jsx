import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatSaleId from '../../helpers/formatSaleId';
import formatCurrency from '../../helpers/formatCurrency';

function OrderCard({ order }) {
  const {
    id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  } = order;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <button type="button" onClick={ onClick }>
      <div>
        <p>Pedido</p>
        <p
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          { formatSaleId(id) }
        </p>
      </div>
      <div>
        <div>
          <p
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            { status }
          </p>
          <div>
            <p
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              { new Date(saleDate).toLocaleDateString('pt-BR') }
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              { `R$ ${formatCurrency(totalPrice)}` }
            </p>
          </div>
        </div>
      </div>
      <div>
        <span
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}` }
        </span>
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
