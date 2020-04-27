import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
  // we could also pass in logger to applyMiddleware
  // usually we pass in logger at the end
  
};

export default configureStore;
