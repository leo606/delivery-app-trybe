import React from 'react';
import PropTypes from 'prop-types';

function ProductTr({ product, index }) {
  const { name, salesProducts, price } = product;
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{salesProducts.quantity}</td>
      <td>{price}</td>
      <td>{salesProducts.quantity * price}</td>
    </tr>
  );
}

ProductTr.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    salesProducts: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductTr;

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
