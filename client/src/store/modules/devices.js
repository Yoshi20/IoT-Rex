import { apiGetDevices, apiGetDevice } from '../../api';

/* Actions */
const DEVICES_SET = 'DEVICES_SET';
const DEVICE_SET = 'DEVICE_SET';

const initialState = {
  allDevices: [],
  selectedDevice: {},
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEVICES_SET:
      return { ...state, allDevices: action.payload };

    case DEVICE_SET:
      return { ...state, selectedDevice: action.payload };

    default:
      return state;
  }
}

/* Action Creators */
function setDevices(devices) {
  return { type: DEVICES_SET, payload: devices };
}

function setDevice(device) {
  return { type: DEVICE_SET, payload: device };
}

export function devicesGet(o_id) {
  return async dispatch => {
    try {
      const response = await apiGetDevices(o_id);
      const devices = [...response.data];
      dispatch(setDevices(devices));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}

export function deviceGet(id) {
  return async dispatch => {
    try {
      const response = await apiGetDevice(id);
      const device = response.data;
      dispatch(setDevice(device));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
