import React from 'react';
import { useSelector } from 'react-redux';

import calcTotal from '../../helpers/calcTotal';

import Header from '../../components/header/Header';
import CartTable from './CartTable';

function Checkout() {
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <Header />
      <main>
        <h1>Finalizar Pedido</h1>
        <CartTable />
        <div data-testid="customer_checkout__element-order-total-price">
          {`Total: R$ ${calcTotal(cart)}`}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
