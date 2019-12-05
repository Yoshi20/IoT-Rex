import { apiLogin, apiLogout } from '../../api';

/* Actions */
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_SET_ORGANISATION = 'USER_SET_ORGANISATION';

const initialState = {
  loggedIn: false,
  authToken: null,
  id: -1,
  email: '',
  name: '',
  organisation: {
    id: -1,
    name: '',
  },
  role: {
    id: -1,
    name: '',
    rights: 0,
  },
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.payload, loggedIn: true };
    case USER_LOGOUT:
      return { ...initialState };
    case USER_SET_ORGANISATION:
      return { ...state, organisation: action.payload };
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

export function userSetOrganisation(id, name) {
  return { type: USER_SET_ORGANISATION, payload: { id, name } };
}

export function userLogin(email, password) {
  return async dispatch => {
    try {
      const response = await apiLogin(email, password);
      const user = { ...response.data, authToken: response.headers.authorization };
      console.log(user);
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
