import { apiGetUser } from '../../api';

/* Actions */
const USER_INFO_SET = 'USER_INFO_SET';

const initialState = {
  id: -1,
  email: '',
  name: '',
  role: {
    id: -1,
    name: '',
    rights: 0,
  },
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_INFO_SET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

/* Action Creators */
function setUserInfo(user) {
  return { type: USER_INFO_SET, payload: user };
}

export function userInfoGet(id) {
  return async dispatch => {
    try {
      const response = await apiGetUser(id);
      const user = response.data;
      dispatch(setUserInfo(user));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
