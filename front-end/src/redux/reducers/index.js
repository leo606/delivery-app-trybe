import { combineReducers } from 'redux';
import user from './user';
import registerReducer from './register';

const rootReducer = combineReducers({
  user,
  registerReducer,
});

export default rootReducer;
