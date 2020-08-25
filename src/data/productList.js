import { createActions } from 'redux-actions';
import apis from '@/apis';

// action type
export const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';
export const GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

// action creator
const {
  getCategoriesLoading,
  getCategoriesSuccess,
  getCategoriesFail,
  getProductsLoading,
  getProductsSuccess,
  getProductsFail,
} = createActions(
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
);

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesLoading());
  try {
    const r = await apis.categoryApi.getAllCategories();
    dispatch(getCategoriesSuccess(r));
  } catch (e) {
    dispatch(getCategoriesFail(e));
  }
};
export const getProducts = (categoryId = null) => async (dispatch) => {
  dispatch(getProductsLoading());
  try {
    const r = await apis.productApi.fetchProducts(categoryId);
    dispatch(getProductsSuccess(r));
  } catch (e) {
    dispatch(getProductsFail(e));
  }
};

// reducer
const INITIAL_STATE = {
  categories: [],
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

// selector
export const selectCategories = (store) => store.productList.categories;
export const selectProducts = (store) => store.productList.products;
