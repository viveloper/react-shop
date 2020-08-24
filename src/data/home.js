import { createActions } from 'redux-actions';
import apis from '@/apis';
import WatchImg from '@/assets/images/products/item5.jpeg';
import ClothesImg from '@/assets/images/products/item6.jpeg';
import ShoesImg from '@/assets/images/products/item7.jpeg';
import GlovesImg from '@/assets/images/products/item10.jpeg';

// action type
export const GET_NEW_ARRIVALS_LOADING = 'GET_NEW_ARRIVALS_LOADING';
export const GET_NEW_ARRIVALS_SUCCESS = 'GET_NEW_ARRIVALS_SUCCESS';
export const GET_NEW_ARRIVALS_FAIL = 'GET_NEW_ARRIVALS_FAIL';

// action creator
const { getNewArrivalsLoading, getNewArrivalsSuccess, getNewArrivalsFail } = createActions(
  GET_NEW_ARRIVALS_LOADING,
  GET_NEW_ARRIVALS_SUCCESS,
  GET_NEW_ARRIVALS_FAIL
);

export const getNewArrivals = () => async (dispatch) => {
  dispatch(getNewArrivalsLoading());
  try {
    const r = await apis.productApi.fetchNewArrivals();
    dispatch(getNewArrivalsSuccess(r));
  } catch (e) {
    dispatch(getNewArrivalsSuccess(e));
  }
};

// reducer
const INITIAL_STATE = {
  newArrivals: [],
  featuredCollection: [
    {
      id: '1',
      name: 'Watch',
      to: '#',
      img: WatchImg,
    },
    {
      id: '2',
      name: 'Clothes',
      to: '#',
      img: ClothesImg,
    },
    {
      id: '3',
      name: 'Shoes',
      to: '#',
      img: ShoesImg,
    },
    {
      id: '4',
      name: 'Gloves',
      to: '#',
      img: GlovesImg,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEW_ARRIVALS_SUCCESS:
      return {
        ...state,
        newArrivals: action.payload,
      };
    default:
      return state;
  }
};

// selector
export const selectNewArrivals = (store) => store.home.newArrivals;
export const selectFeaturedCollection = (store) => store.home.featuredCollection;
