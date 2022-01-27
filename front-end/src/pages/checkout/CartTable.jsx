import React from 'react';
import { useSelector } from 'react-redux';

import TableHeader from './TableHeader';
import ProductTr from './ProductTr';

function CartTable() {
  const cart = useSelector((store) => store.cart);

  return (
    <table>
      <TableHeader />
      {cart.map((p, i) => <ProductTr key={ p.id } product={ p } index={ i + 1 } />)}
    </table>
  );
}

export default CartTable;
