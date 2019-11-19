import { apiLogin, apiLogout } from '../../api';

/* Actions */
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  loggedIn: false,
  authToken: null,
  email: '',
  id: -1,
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      const { id, email, authToken } = action.payload;
      return { ...state, id, email, authToken, loggedIn: true };
    case USER_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

/* Action Creators */
function login(user) {
  return { type: USER_LOGIN, payload: user };
}

function logout() {
  return { type: USER_LOGOUT };
}

export function userLogin(email, password) {
  return async dispatch => {
    try {
      const response = await apiLogin(email, password);
      const user = { ...response.data, authToken: response.headers.authorization };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(login(user));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}

export function userLoad() {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      dispatch(login(user));
    }
  };
}

export function userLogout() {
  return async dispatch => {
    try {
      await apiLogout();
      localStorage.removeItem('user');
      dispatch(logout());
    } catch (e) {
      throw new Error(e);
    }
  };
}
