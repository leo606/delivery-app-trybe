import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';

import getLocalStorage from '../../helpers/getLocalStorage';
import OrderCard from './OrderCard';

const ORDERS_LIST_URL = 'http://localhost:3001/customer/orders';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const config = {
          headers: { authorization: getLocalStorage('user').token },
        };
        const res = await axios.get(ORDERS_LIST_URL, config);
        setOrders(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <main>
        {orders.map((o) => (<OrderCard key={ o.id } order={ o } />))}
      </main>
    </>
  );
}

export default Orders;
