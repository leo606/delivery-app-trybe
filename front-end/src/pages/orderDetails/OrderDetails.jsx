import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import getLocalStorage from '../../helpers/getLocalStorage';
import Header from '../../components/header/Header';
import OrderHeader from './OrderHeader';
import ItemsTable from './ItemsTable';
import formatCurrency from '../../helpers/formatCurrency';
import './OrderDetails.css';
import getSocket from '../../sockets/getSocket';

const socket = getSocket();

const ORDER_URL = 'http://localhost:3001/sale';

function OrderDetails() {
  const { saleId } = useParams();
  const [sale, setSale] = useState({});

  socket.on('saleStatus', ({ id, status }) => {
    if (id === sale.id) {
      setSale({ ...sale, status });
    }
  });

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
          <ItemsTable sale={ sale } />
          <div data-testid="customer_order_details__element-order-total-price">
            Total:
            {' '}
            {formatCurrency(sale.totalPrice)}
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
