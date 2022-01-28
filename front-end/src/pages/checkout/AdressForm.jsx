import React from 'react';

function AdressForm() {
  return (
    <form>
      <select
        name="sellerId"
        id=""
        data-testid="customer_checkout__select-seller"
      >
        <option value="x">x</option>
        <option value="y">y</option>
        <option value="z">z</option>
      </select>
      <input
        type="text"
        name="deliveryAddress"
        data-testid="customer_checkout__input-address"
      />
      <input
        type="number"
        name="deliveryNumber"
        data-testid="customer_checkout__input-addressNumber"
      />
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
