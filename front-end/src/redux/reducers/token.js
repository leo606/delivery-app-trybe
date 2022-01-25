import { GET_TOKEN } from '../actions/login/getToken';

const INITIAL_STATE = false;

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN: {
    const newState = action.payload;
    return newState;
  }
  default:
    return state;
  }
};

export default token;
