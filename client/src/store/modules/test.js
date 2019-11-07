/* Actions */
const TEST_INCREMENT = "TEST_INCREMENT";
const TEST_DECREMENT = "TEST_DECREMENT";

const initialState = {
  count: 0
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TEST_INCREMENT:
      return { ...state, count: state.count + 1 };
    case TEST_DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

/* Action Creators */
export function incrementBodyPart(type) {
  return { type: TEST_INCREMENT };
}

export function decrementBodyPart(type) {
  return { type: TEST_DECREMENT };
}
