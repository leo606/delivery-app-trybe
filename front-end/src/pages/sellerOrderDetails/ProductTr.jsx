import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';

function ProductTr({ product, index }) {
  const { name, salesProducts, price } = product;
  return (
    <tr>
      <td
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        {index}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        {salesProducts.quantity}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
      >
        {formatCurrency(price)}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
      >
        {formatCurrency(salesProducts.quantity * price)}
      </td>
    </tr>
  );
}

ProductTr.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    salesProducts: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductTr;
