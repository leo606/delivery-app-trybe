import { ADD_PRODUCT } from '../actions/cart/addProduct';
import { RM_PRODUCT } from '../actions/cart/rmProduct';

const INITIAL_STATE = [];
const incrementNumber = 1;
const decrementNumber = -1;

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PRODUCT: {
    const { id, price } = action.payload;
    const index = state.findIndex((e) => e.id === id);
    if (index < 0) {
      const newState = [...state, { id, price, quantity: 1 }];
      return newState;
    }
    const newState = state.map((e) => {
      if (e.id !== id) return e;
      return { id, price, quantity: e.quantity + incrementNumber };
    });
    return [...newState];
  }
  case RM_PRODUCT: {
    const { id, price } = action.payload;
    const newState = state.map((e) => {
      if (e.id !== id) return e;
      if (e.quantity === 1) return 'removed';
      return { id, price, quantity: e.quantity + decrementNumber };
    }).filter((e) => e !== 'removed');
    return newState;
  }
  default:
    return state;
  }
};

export default cart;
