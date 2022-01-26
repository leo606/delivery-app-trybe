import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';

function ProductCard({ product, key }) {
  const { price, image, name } = product;
  const [qunatity, setQuantity] = useState(0);

  const addButton = () => {
    setQuantity(qunatity + 1);
  };

  const rmButton = () => {
    if (qunatity > 0) setQuantity(qunatity - 1);
  };

  return (
    <div>
      <div>
        <span
          data-testid={ `customer_products__element-card-price-${key}` }
        >
          { `R$ ${formatCurrency(price)}` }
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${key}` }
          src={ image }
          alt={ `${name}` }
        />
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${key}` }
        >
          { name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${key}` }
          onClick={ rmButton }
        >
          -
        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${key}` }
        >
          { qunatity }
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${key}` }
          onClick={ addButton }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

export default ProductCard;
