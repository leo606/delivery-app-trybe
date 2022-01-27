import React from 'react';
import PropTypes from 'prop-types';

function ProductTr({ product }) {
  return (
    <tr key={ product.id }>
      <td>{product.id}</td>
    </tr>
  );
}

ProductTr.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductTr;
