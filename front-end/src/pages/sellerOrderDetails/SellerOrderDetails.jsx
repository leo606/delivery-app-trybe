import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import getLocalStorage from '../../helpers/getLocalStorage';
import Header from '../../components/header/Header';
import OrderHeader from './OrderHeader';
import ItemsTable from './ItemsTable';
import formatCurrency from '../../helpers/formatCurrency';
import './SellerOrderDetails.css';

const ORDER_URL = 'http://localhost:3001/sale';

function SellerOrderDetails() {
  const { saleId } = useParams();
  const [sale, setSale] = useState({});

  useEffect(() => {
    async function fetchOrder() {
      try {
        const config = {
          headers: { authorization: getLocalStorage('user').token },
        };

        const res = await axios.get(`${ORDER_URL}/${saleId}`, config);
        setSale(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchOrder();
  }, [saleId]);

  if (!sale.id) return <span>loading...</span>;

  return (
    <>
      <Header />
      <main>
        <h1>Detalhe do Pedido</h1>
        <div className="container">
          <OrderHeader sale={ sale } />
          <ItemsTable products={ sale.products } />
          <div data-testid="seller_order_details__element-order-total-price">
            Total:
            {' '}
            {formatCurrency(sale.totalPrice)}
          </div>
        </div>
      </main>
    </>
  );
}

export default SellerOrderDetails;
