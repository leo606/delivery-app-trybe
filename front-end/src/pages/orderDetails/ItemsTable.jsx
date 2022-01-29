import React from 'react';
import PropTypes from 'prop-types';
import ProductTr from './ProductTr';

function ItemsTable({ sale }) {
  const { products } = sale;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod, i) => (
          <ProductTr key={ prod.id } product={ prod } index={ i + 1 } />
        ))}
      </tbody>
    </table>
  );
}

ItemsTable.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    totalPrice: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        map: PropTypes.func,
      }),
    ).isRequired,
  }).isRequired,
};

export default ItemsTable;
