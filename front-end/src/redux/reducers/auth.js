import { GET_AUTH } from '../actions/login/getAuth';

const INITIAL_STATE = false;

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_AUTH: {
    const newState = action.payload;
    return newState;
  }
  default:
    return state;
  }
};

export default auth;
