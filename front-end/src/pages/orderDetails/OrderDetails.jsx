import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import getLocalStorage from '../../helpers/getLocalStorage';

import Header from '../../components/header/Header';
import ItemsTable from './ItemsTable';

const ORDER_URL = 'http://localhost:3001/sale';

function OrderDetails() {
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
        <div>
          <ItemsTable sale={ sale } />
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
