// action type
export const LOG_IN = 'LOG_IN';
export const RESET_AUTH = 'RESET_AUTH';

// action creator
export const logout = () => ({
  type: RESET_AUTH,
});

export const login = ({ email, password }) => ({
  type: LOG_IN,
  user: {
    id: '1',
    name: 'harry',
    email: 'tester00@gmail.com',
  },
});

// reducer
const initialState = {
  [LOG_IN]: null,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return {
        [LOG_IN]: action.user,
      };
    case RESET_AUTH:
      return {
        [LOG_IN]: null,
      };

    default:
      return state;
  }
}

// selector
export const getUser = (state) => state.user[LOG_IN];
