import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const initialState = {
  things: [
    {
      name: "bla",
      text: "123"
    },
    {
      name: "blup",
      text: "456"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return { things: action.json.things };
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}
