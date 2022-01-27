import formatCurrency from './formatCurrency';

export default function calcTotal(cart) {
  let total = 0;

  cart.forEach((e) => {
    const { price, quantity } = e;
    total += (price * quantity);
  });
  return formatCurrency(total);
}
