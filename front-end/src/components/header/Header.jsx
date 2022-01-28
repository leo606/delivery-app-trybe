import React from 'react';
import { Link } from 'react-router-dom';
import getLocalStorage from '../../helpers/getLocalStorage';
import './Header.css';

function Header() {
  const { name } = getLocalStorage('user');

  const logoutButton = () => {
    localStorage.removeItem('user');
  };

  return (
    <nav className="header">
      <div className="products">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
      </div>
      <Link
        className="orders"
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
      <p
        className="name"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </p>
      <Link
        className="logout"
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
