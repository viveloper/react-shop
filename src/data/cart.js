import { combineReducers } from 'redux';

// action type
export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

// action creator
export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addCartItem = (product, qty) => ({
  type: ADD_CART_ITEM,
  payload: { product, qty },
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: { id },
});

// reducer
const isShopingCartOpen = (state = false, { type, payload }) => {
  switch (type) {
    case OPEN_CART:
      return true;
    case CLOSE_CART:
      return false;
    case TOGGLE_CART:
      return !state;
    default:
      return state;
  }
};

const cartItems = (state = [], { type, payload = {} }) => {
  const { product = {}, qty, id } = payload;
  let found = {};

  switch (type) {
    case ADD_CART_ITEM:
      found = state.find((v) => v.product.id === product.id);
      if (found) {
        if (qty) {
          found.count += qty;
        } else {
          found.count += 1;
        }
        return [...state];
      } else {
        return [...state, { product, count: qty ? qty : 1 }];
      }

    case REMOVE_CART_ITEM:
      found = state.find((v) => v.product.id === id);
      if (found == null) {
        throw new Error(`Can not find the item (${id})`);
      }
      if (found && found.count > 1) {
        found.count -= 1;
      } else {
        const index = state.indexOf(found);
        state.splice(index, 1);
      }
      return [...state];

    default:
      return state;
  }
};

export default combineReducers({
  isShopingCartOpen,
  cartItems,
});

// selector
export const selectIsShopingCartOpen = (state) => state.cart.isShopingCartOpen;
export const selectCartItems = (state) => state.cart.cartItems;
export const getTotal = (cartItems) => cartItems.reduce((acc, o) => acc + o.count * o.product.price, 0);
export const selectCartItemCounts = (state) => state.cart.cartItems.length;
