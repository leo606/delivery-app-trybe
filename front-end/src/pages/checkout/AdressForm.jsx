/*eslint-disable*/
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import getLocalStorage from '../../helpers/getLocalStorage';

import calcTotal from '../../helpers/calcTotal';

const POST_CHECKOUT = 'http://localhost:3001/checkout';

function AdressForm() {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    sellerId: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  function handleChange({ target }) {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function postSale(e) {
    e.preventDefault();
    const data = { ...formData, products: cart, total: +calcTotal(cart) };
    const config = { headers: { authorization: getLocalStorage('user').token } };
    try {
      axios.post(POST_CHECKOUT, data, config);
    } catch (e) {
      console.log(e);
      console.log(e.message);
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
          <option value="x">x</option>
          <option value="y">y</option>
          <option value="z">z</option>
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
