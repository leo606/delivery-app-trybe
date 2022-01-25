export const NEW_REGISTER = 'NEW_REGISTER';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_REGISTER:
    return { state: action.state };
  default:
    return state;
  }
}

export default registerReducer;
