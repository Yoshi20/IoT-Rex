/* Actions */
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  loggedIn: false,
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loggedIn: true };
    case USER_LOGOUT:
      return { ...state, loggedIn: false };

    default:
      return state;
  }
}

/* Action Creators */
export function userLogin() {
  return { type: USER_LOGIN };
}

export function userLogout() {
  return { type: USER_LOGOUT };
}
