import { combineReducers } from 'redux';
import user from './user';
import home from './home';
import cart from './cart';

export default combineReducers({
  user,
  home,
  cart,
});
