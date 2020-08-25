import { combineReducers } from 'redux';
import user from './user';
import home from './home';
import productList from './productList';
import cart from './cart';
import modal from './modal';

export default combineReducers({
  user,
  home,
  productList,
  cart,
  modal,
});
