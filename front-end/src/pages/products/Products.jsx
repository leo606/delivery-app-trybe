import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import status from '../../helpers/status';
import Header from '../../components/header/Header';
import ProductCard from './ProductCard';
import getLocalStorage from '../../helpers/getLocalStorage';
import formatCurrency from '../../helpers/formatCurrency';
import './Products.css';

const PRODUCTS_URL = 'http://localhost:3001/products';

const calcTotal = (cart) => {
  let total = 0;

  cart.forEach((e) => {
    const { price, quantity } = e;
    total += (price * quantity);
  });
  return total;
};

const checkCartValue = (value) => {
  if (value === 0) return true;
  return false;
};

function Products() {
  const cart = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const checkoutButton = () => {
    navigate('/customer/checkout');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL, {
          headers: {
            authorization: getLocalStorage('user').token,
          },
        });

        if (res.status === status.OK) setProducts(res.data);
      } catch (err) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="productList">
        { products.map((product, i) => (
          <ProductCard
            product={ product }
            key={ i }
            index={ i }
          />))}
      </div>
      <div className="cartDiv">
        <button
          type="button"
          className="btnCart"
          to="/customer/checkout"
          data-testid="customer_products__button-cart"
          onClick={ checkoutButton }
          disabled={ checkCartValue(calcTotal(cart)) }
        >
          Ver carrinho:
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { `${formatCurrency(calcTotal(cart))}` }
          </span>
        </button>
      </div>
    </div>
  );
}

export default Products;
