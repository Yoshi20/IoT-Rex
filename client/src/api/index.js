import axios from 'axios';

const api = {
  authToken: '',
};

/* User */
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

export async function apiGetUser(id) {
  return await axios.get(`/api/v1/users/${id}`, {
    headers: {
      Authorization: api.authToken,
    },
  });
}

/* Organisations */

export async function apiGetOrganisations() {
  return await axios.get(`/api/v1/organisations/`, {
    headers: {
      Authorization: api.authToken,
    },
  });
}

export async function apiGetOrganisation(id) {
  return await axios.get(`/api/v1/organisations/${id}`, {
    headers: {
      Authorization: api.authToken,
    },
  });
}

/* Devices */
export async function apiGetDevices() {
  return await axios.get('/api/v1/devices', {
    headers: {
      Authorization: api.authToken,
    },
  });
}

export async function apiGetDevice(id) {
  return await axios.get(`/api/v1/devices/${id}`, {
    headers: {
      Authorization: api.authToken,
    },
  });
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
