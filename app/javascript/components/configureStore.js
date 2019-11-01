import { createStore } from "redux";

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
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
