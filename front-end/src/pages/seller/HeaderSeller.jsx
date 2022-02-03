import React from 'react';
import { Link } from 'react-router-dom';
import getLocalStorage from '../../helpers/getLocalStorage';

function HeaderAdmin() {
  const { name } = getLocalStorage('user');

  const logoutButton = () => {
    localStorage.removeItem('user');
  };

  return (
    <header>
      <nav>
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS
        </Link>
      </nav>
      <p data-testid="customer_products__element-navbar-user-full-name">{ name }</p>
      <Link
        to="/login"
        className="logout"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logoutButton }
      >
        Sair
      </Link>
    </header>
  );
}

export default HeaderAdmin;
