import React from 'react';
import { useSelector } from 'react-redux';

import ProductTr from './ProductTr';

import Header from '../../components/header/Header';

function Checkout() {
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <Header />
      <Header />
      <main>
        <h1>Finalizar Pedido</h1>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {cart.map((p) => <ProductTr key={ p.id } product={ p } />)}

        </table>
      </main>
    </div>
  );
}

export default Checkout;
