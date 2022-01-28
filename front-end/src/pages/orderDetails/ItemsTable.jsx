import React from 'react';
import PropTypes from 'prop-types';
import ProductTr from './ProductTr';

function ItemsTable({ sale }) {
  const { products } = sale;
  return (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-total</td>
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
    products: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      map: PropTypes.func,
    }),
  }).isRequired,
};

export default ItemsTable;

// {
//   "id": 5,
//   "userId": 4,
//   "sellerId": 2,
//   "totalPrice": "24.84",
//   "deliveryAddress": "asdfasdf",
//   "deliveryNumber": "123123",
//   "saleDate": "2022-01-28T20:01:39.000Z",
//   "status": "Pendente",
//   "products": [
//       {
//           "id": 9,
//           "name": "Becks 600ml",
//           "price": "8.89",
//           "urlImage": "http://localhost:3001/images/becks_600ml.jpg",
//           "salesProducts": {
//               "quantity": 2,
//               "saleId": 5,
//               "productId": 9
//           }
//       },
//       {
//           "id": 10,
//           "name": "Skol Beats Senses 269ml",
//           "price": "3.57",
//           "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg",
//           "salesProducts": {
//               "quantity": 1,
//               "saleId": 5,
//               "productId": 10
//           }
//       },
//       {
//           "id": 11,
//           "name": "Stella Artois 275ml",
//           "price": "3.49",
//           "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg",
//           "salesProducts": {
//               "quantity": 1,
//               "saleId": 5,
//               "productId": 11
//           }
//       }
//   ]
// }
