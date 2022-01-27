import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';
import { addProduct } from '../../redux/actions/cart/addProduct';
import { rmProduct } from '../../redux/actions/cart/rmProduct';
import { changeQuantityProduct } from '../../redux/actions/cart/changeQuantityProduct';

function ProductCard({ product }) {
  const { price, url_image: image, name, id } = product;
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
    dispatch(addProduct({ id, price, name }));
  };

  const rmButton = () => {
    dispatch(rmProduct({ id, price, name }));
  };

  const quantityChange = ({ target: { value } }) => {
    const numberValue = +value;
    if (numberValue < 0) {
      dispatch(changeQuantityProduct({ id, price, name, value: 0 }));
    } else {
      console.log(numberValue);
      dispatch(changeQuantityProduct({ id, price, name, value: numberValue }));
    }
  };

  return (
    <div>
      <div>
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { `R$ ${formatCurrency(price)}` }
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt={ `${name}` }
        />
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ rmButton }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ qunatity }
          onChange={ quantityChange }
          style={ { appearance: 'textfield' } }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
    url_image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductCard;