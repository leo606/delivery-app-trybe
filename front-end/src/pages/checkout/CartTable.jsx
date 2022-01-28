import React from 'react';
import { useSelector } from 'react-redux';

import TableHeader from './TableHeader';
import ProductTr from './ProductTr';

function CartTable() {
  const cart = useSelector((store) => store.cart);

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {cart.map((p, i) => <ProductTr key={ p.id } product={ p } index={ i } />)}
      </tbody>
    </table>
  );
}

export default CartTable;
