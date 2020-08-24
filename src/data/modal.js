// action type
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

// action creator
export const closeModal = (props = {}) => ({
  type: CLOSE_MODAL,
  payload: { props },
});

export const showModal = (type, props = {}) => ({
  type: SHOW_MODAL,
  payload: { type, props },
});

// reducer
const initialState = [];

const modals = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_MODAL:
      state.shift();
      return [...state];
    case SHOW_MODAL: {
      return state.filter((x) => x.type === type).length === 0 ? [payload, ...state] : state;
    }
    default:
      return state;
  }
};

export default modals;

// selector
export const getModals = (state) => state['modal'];
