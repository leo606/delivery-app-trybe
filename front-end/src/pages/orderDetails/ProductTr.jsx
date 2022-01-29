import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';

function ProductTr({ product, index }) {
  const { name, salesProducts, price } = product;
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{salesProducts.quantity}</td>
      <td>{formatCurrency(price)}</td>
      <td>{formatCurrency(salesProducts.quantity * price)}</td>
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
