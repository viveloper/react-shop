import { createStore } from 'redux';
import rootReducer from '@/data/rootReducer';

export default function configureStore() {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
}
