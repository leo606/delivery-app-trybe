export const NEW_REGISTER = 'NEW_REGISTER';
export const POST_REGISTER = 'POST_REGISTER';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';

const initialState = {
  name: '',
  email: '',
  password: '',
  token: '',
  isLoading: false,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case NEW_REGISTER:
    return { state: action.state };
  case POST_REGISTER:
    return { ...state, isLoading: true };
  case API_SUCESS:
    return {
      ...state,
      error: null,
      token: action.payload.results,
      isLoading: false,
    };
  case API_ERROR:
    return {
      ...state,
      error: action.eror,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default registerReducer;
