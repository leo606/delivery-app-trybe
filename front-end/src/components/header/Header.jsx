import React from 'react';
import { Link } from 'react-router-dom';
import getLocalStorage from '../../helpers/getLocalStorage';

function Header() {
  const { name } = getLocalStorage('user');

  const logoutButton = () => {
    localStorage.removeItem('user');
  };

  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
      <p data-testid="customer_products__element-navbar-user-full-name">{ name }</p>
      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logoutButton }
      >
        Sair
      </Link>
    </nav>
  );
}

export default Header;
