import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../../helpers/getLocalStorage';
import getSocket from '../../sockets/getSocket';

import calcTotal from '../../helpers/calcTotal';

const POST_CHECKOUT = 'http://localhost:3001/checkout';
const GET_SELLERS = 'http://localhost:3001/users/sellers';

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
    const headers = { authorization: getLocalStorage('user').token };
    try {
      const posted = await axios.post(POST_CHECKOUT, data, { headers });
      socket.emit('newSale', posted.data);
      return navigate(`/customer/orders/${posted.data.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={ postSale } className="checkout-form">
      <label htmlFor="seller-select">
        Seller
        <select
          name="sellerId"
          id="seller-select"
          onChange={ handleChange }
          data-testid="customer_checkout__select-seller"
        >
          {sellers.map(({ id, name }) => (
            <option key={ id } value={ id }>
              {name}
            </option>
          ))}
        </select>

      </label>
      <label htmlFor="address-input">
        Address
        <input
          type="text"
          id="address-input"
          name="deliveryAddress"
          onChange={ handleChange }
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number-input">
        Number
        <input
          type="number"
          id="number-input"
          name="deliveryNumber"
          onChange={ handleChange }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
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
