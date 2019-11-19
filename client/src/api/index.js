import axios from 'axios';

const api = {
  authToken: '',
};

export function apiLogin(userName, password) {
  return axios.post('/api/v1/login', {
    user: {
      email: userName,
      password: password,
    },
  });
}

export function apiLogout() {
  return axios.delete('/api/v1/logout');
}

/* Function to connect the api with the Redux store.
   This is needed because we use the auth token for the requests */
export default function configureApi(store) {
  const unsubscribe = store.subscribe(() => {
    const { user } = store.getState();
    const { authToken } = user;
    if (authToken) {
      api.authToken = authToken;
    } else {
      api.authToken = '';
    }
  });
  return unsubscribe;
}
