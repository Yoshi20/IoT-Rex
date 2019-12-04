import { apiGetDevices } from '../../api';

/* Actions */
const DEVICES_SET = 'DEVICES_SET';

const initialState = {
  devices: [],
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEVICES_SET:
      return { ...state, devices: action.payload };
    default:
      return state;
  }
}

/* Action Creators */
function setDevices(devices) {
  return { type: DEVICES_SET, payload: devices };
}

export function devicesGet() {
  return async dispatch => {
    try {
      const response = await apiGetDevices();
      const devices = [...response.data];
      dispatch(setDevices(devices));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
