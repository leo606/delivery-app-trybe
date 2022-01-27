import { ADD_PRODUCT } from '../actions/cart/addProduct';
import { RM_PRODUCT } from '../actions/cart/rmProduct';
import { DELETE_PRODUCT } from '../actions/cart/deleteProduct';
import { CHANGE_QUANTITY } from '../actions/cart/changeQuantityProduct';

const INITIAL_STATE = [];
const incrementNumber = 1;
const decrementNumber = -1;

const changeQuantityLogic = (state, payload) => {
  const { id, value, name, price } = payload;
  const product = state.find((e) => e.id === id);
  if (!product) state = [...state, { id, price, name, quantity: value }];
  console.log(state);
  if (value === 0) {
    const newState = state.filter((e) => e.id !== id);
    return newState;
  }
  const newState = state.map((e) => {
    if (e.id === id) return { id, price, name, quantity: value };
    return e;
  });
  return newState;
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PRODUCT: {
    const { id, price, name } = action.payload;
    const index = state.findIndex((e) => e.id === id);
    if (index < 0) {
      const newState = [...state, { id, price, name, quantity: 1 }];
      return newState;
    }
    const newState = state.map((e) => {
      if (e.id !== id) return e;
      return { id, price, name, quantity: e.quantity + incrementNumber };
    });
    return [...newState];
  }
  case RM_PRODUCT: {
    const { id, price, name } = action.payload;
    const newState = state.map((e) => {
      if (e.id !== id) return e;
      if (e.quantity === 1) return 'removed';
      return { id, price, name, quantity: e.quantity + decrementNumber };
    }).filter((e) => e !== 'removed');
    return newState;
  }
  case DELETE_PRODUCT: {
    const { id } = action.payload;
    const newState = state.map((e) => {
      if (e.id !== id) return e;
      return 'removed';
    }).filter((e) => e !== 'removed');
    return newState;
  }
  case CHANGE_QUANTITY: {
    return changeQuantityLogic(state, action.payload);
  }
  default:
    return state;
  }
};

export default cart;
