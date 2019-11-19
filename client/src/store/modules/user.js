/* Actions */
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  loggedIn: false,
  authToken: '',
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loggedIn: true };
    case USER_LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
}

/* Action Creators */
function login() {
  return { type: USER_LOGIN };
}

function logout() {
  return { type: USER_LOGOUT };
}

export function userLogin() {
  return async dispatch => {
    try {
      // await switchCodeEditor();
      dispatch(login());
    } catch (e) {
      throw new Error(e);
    }
  };
}

export function userLogout() {
  return async dispatch => {
    try {
      // await switchCodeEditor();
      dispatch(logout());
    } catch (e) {
      throw new Error(e);
    }
  };
}
