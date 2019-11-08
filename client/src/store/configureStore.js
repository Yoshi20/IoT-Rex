import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import user from './modules/user';

const reducer = combineReducers({
  user,
});

const configureStore = initialState => {
  const middleware = [ReduxThunk, logger];

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
};

export default configureStore;
