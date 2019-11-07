import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

import creep from "./modules/test";

const reducer = combineReducers({
  creep
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
