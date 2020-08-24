import { combineReducers } from 'redux';
import user from './user';
import home from './home';
import cart from './cart';
import productList from './productList';

export default combineReducers({
  user,
  home,
  cart,
  productList,
});
