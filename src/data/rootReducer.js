import { combineReducers } from 'redux';
import user from './user';
import home from './home';
import categories from './categories';
import cart from './cart';
import modal from './modal';

export default combineReducers({
  user,
  home,
  categories,
  cart,
  modal,
});
