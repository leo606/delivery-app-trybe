import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../redux/actions/cart/deleteProduct';
import formatCurrency from '../../helpers/formatCurrency';

function ProductTr({ product }) {
  const dispatch = useDispatch();

  return (
    <tr key={ product.id }>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{formatCurrency(product.quantity * product.price)}</td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${product.id}` }
          type="button"
          onClick={ () => dispatch(deleteProduct({ id: product.id })) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

ProductTr.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ProductTr;
