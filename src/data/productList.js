// action type
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS = 'GET_PRODUCTS';

// action creator
export const getProducts = () => ({
  type: GET_PRODUCTS,
});

// reducer
const initialState = {
  categories: [
    { id: '1', name: 'Shirts', counts: 3 },
    { id: '2', name: 'Dolls', counts: 2 },
    { id: '3', name: 'Notes', counts: 5 },
    { id: '4', name: 'Watches', counts: 1 },
    { id: '5', name: 'Clothes', counts: 10 },
    { id: '6', name: 'Shoes', counts: 4 },
    { id: '7', name: 'GLoves', counts: 10 },
  ],
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [
          {
            id: '1',
            name: 'React Note',
            price: 2000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 4,
            total_reviews: 200,
            category: 3,
          },
          {
            id: '2',
            name: 'React Product 2',
            price: 13000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 4,
            total_reviews: 5,
            category: 4,
          },
          {
            id: '3',
            name: 'React Product 3',
            price: 4000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 2,
            total_reviews: 10,
            category: 2,
          },
          {
            id: '4',
            name: 'React Product 4',
            price: 5000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 1,
            total_reviews: 10,
            category: 5,
          },
        ],
      };
    default:
      return state;
  }
};

// selector
export const selectProducts = (store) => store.productList.products;
export const selectCategories = (store) => store.productList.categories;
