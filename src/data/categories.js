import { createActions } from 'redux-actions';
import apis from '@/apis';

// action type
export const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

// action creator
const { getCategoriesLoading, getCategoriesSuccess, getCategoriesFail } = createActions(
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL
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

// reducer
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// selector
export const selectCategories = (store) => store.categories;
