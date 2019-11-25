import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import user from './modules/user';
import devices from './modules/devices';

const reducer = combineReducers({
  user,
  devices,
});

const configureStore = initialState => {
  const middleware = [ReduxThunk, logger];

  const store = createStore(reducer, initialState, applyMiddleware(...middleware));

  return store;
};

export default configureStore;
