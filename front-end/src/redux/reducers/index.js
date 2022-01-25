import { combineReducers } from 'redux';
import token from './token';
import registerReducer from './register';

const rootReducer = combineReducers({
  registerReducer,
  token,
});

export default rootReducer;
