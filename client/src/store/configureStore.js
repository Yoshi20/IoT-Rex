import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import user from './modules/user';
import devices from './modules/devices';
import organisations from './modules/organisations';
import userInfo from './modules/userInfo';
import events from './modules/events';

const reducer = combineReducers({
  user,
  devices,
  organisations,
  userInfo,
  events,
});

const configureStore = initialState => {
  const middleware = [ReduxThunk, logger];

  const store = createStore(reducer, initialState, applyMiddleware(...middleware));

  return store;
};

export default configureStore;
