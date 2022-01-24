import { GET_TOKEN } from '../actions/login/getToken';

const INITIAL_STATE = {};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN: {
    const newState = { ...state, token: action.payload };
    return newState;
  }
  default:
    return state;
  }
};

export default user;
