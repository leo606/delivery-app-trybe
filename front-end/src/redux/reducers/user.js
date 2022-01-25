import { GET_USER } from '../actions/user/getUser';

const INITIAL_STATE = {};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER: {
    const newState = { ...state, ...action.payload };
    return newState;
  }
  default:
    return state;
  }
};

export default user;
