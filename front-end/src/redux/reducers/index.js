import { combineReducers } from 'redux';
import registerReducer from './register';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  registerReducer,
  auth,
  user,
});

export default rootReducer;
