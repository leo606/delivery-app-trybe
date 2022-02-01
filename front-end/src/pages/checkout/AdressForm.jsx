import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../../helpers/getLocalStorage';
import getSocket from '../../sockets/getSocket';

import calcTotal from '../../helpers/calcTotal';

const POST_CHECKOUT = 'http://localhost:3001/checkout';
const GET_SELLERS = 'http://localhost:3001/checkout/sellers';

function AdressForm() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sellerId: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });
  const [sellers, setSellers] = useState([]);
  const socket = getSocket();

  useEffect(() => {
    async function getSellers() {
      try {
        const headers = { authorization: getLocalStorage('user').token };
        const { data } = await axios.get(GET_SELLERS, { headers });
        setSellers([...data]);
        setFormData({ ...setFormData, sellerId: data[0].id });
      } catch (e) {
        console.log(e);
      }
    }
    getSellers();
  }, []);

  function handleChange({ target }) {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  }

  async function postSale(e) {
    e.preventDefault();
    console.log(formData);
    const data = {
      ...formData,
      products: cart,
      total: +calcTotal(cart).replace(',', '.'),
    };
    const config = {
      headers: { authorization: getLocalStorage('user').token },
    };
    try {
      const posted = await axios.post(POST_CHECKOUT, data, config);
      socket.emit('newSale', posted.data);
      return navigate(`/customer/orders/${posted.data.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={ postSale }>
      <div>
        <select
          name="sellerId"
          id=""
          onChange={ handleChange }
          data-testid="customer_checkout__select-seller"
        >
          {sellers.map(({ id, name }) => (
            <option key={ id } value={ id }>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="deliveryAddress"
          onChange={ handleChange }
          data-testid="customer_checkout__input-address"
        />
        <input
          type="number"
          name="deliveryNumber"
          onChange={ handleChange }
          data-testid="customer_checkout__input-addressNumber"
        />
      </div>
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default AdressForm;
