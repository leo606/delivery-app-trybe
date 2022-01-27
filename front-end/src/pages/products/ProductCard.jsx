import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';
import { addProduct } from '../../redux/actions/cart/addProduct';
import { rmProduct } from '../../redux/actions/cart/rmProduct';

function ProductCard({ product, index }) {
  const { price, image, name, id } = product;
  const [qunatity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    const item = cart.find((e) => e.id === id);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, id]);

  const addButton = () => {
    dispatch(addProduct({ id, price }));
  };

  const rmButton = () => {
    dispatch(rmProduct({ id, price, name }));
  };

  return (
    <div>
      <div>
        <span
          data-testid={ `customer_products__element-card-price-${index + 1}` }
        >
          { `R$ ${formatCurrency(price)}` }
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${index + 1}` }
          src={ image }
          alt={ `${name}` }
        />
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${index + 1}` }
        >
          { name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index + 1}` }
          onClick={ rmButton }
        >
          -
        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${index + 1}` }
        >
          { qunatity }
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${index + 1}` }
          onClick={ addButton }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
