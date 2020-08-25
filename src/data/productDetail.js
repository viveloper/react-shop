import { createActions } from 'redux-actions';
import apis from '@/apis';

// action type
export const GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';
export const GET_RELATED_PRODUCTS_LOADING = 'GET_RELATED_PRODUCTS_LOADING';
export const GET_RELATED_PRODUCTS_SUCCESS = 'GET_RELATED_PRODUCTS_SUCCESS';
export const GET_RELATED_PRODUCTS_FAIL = 'GET_RELATED_PRODUCTS_FAIL';

// action creator
const {
  getProductLoading,
  getProductSuccess,
  getProductFail,
  getRelatedProductsLoading,
  getRelatedProductsSuccess,
  getRelatedProductsFail,
} = createActions(
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_RELATED_PRODUCTS_LOADING,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAIL
);

export const getProduct = (productId) => async (dispatch) => {
  dispatch(getProductLoading());
  try {
    const r = await apis.productApi.fetchProduct(productId);
    dispatch(getProductSuccess(r));
  } catch (e) {
    dispatch(getProductFail(e));
  }
};
export const getRelatedProducts = (productId) => async (dispatch) => {
  dispatch(getRelatedProductsLoading());
  try {
    const r = await apis.productApi.fetchRelatedProducts(productId);
    dispatch(getRelatedProductsSuccess(r));
  } catch (e) {
    dispatch(getRelatedProductsFail(e));
  }
};

// reducer
const INITIAL_STATE = {
  product: null,
  relatedProducts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case GET_RELATED_PRODUCTS_SUCCESS:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    default:
      return state;
  }
};

// selector
export const selectProduct = (store) => store.productDetail.product;
export const selectRelatedProducts = (store) => store.productDetail.relatedProducts;
