import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderSeller from './HeaderSeller';
import OrderCard from './OrderCard';
import getLocalStorage from '../../helpers/getLocalStorage';

const ORDERS_LIST_URL = 'http://localhost:3001/sale/seller';

function Seller() {
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
    <div>
      <HeaderSeller />
      <div>
        { orders.map((e, i) => <OrderCard key={ i } order={ e } />) }
      </div>
    </div>
  );
}

export default Seller;
