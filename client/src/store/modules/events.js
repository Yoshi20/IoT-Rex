import { apiGetEvents, apiGetEvent, apiAcknowledge } from '../../api';

/* Actions */
const EVENTS_SET = 'EVENTS_SET';
const EVENT_SET = 'EVENT_SET';

const initialState = {
  allEvents: [],
  selectedEvent: {},
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EVENTS_SET:
      return { ...state, allEvents: action.payload };

    case EVENT_SET:
      return { ...state, selectedEvent: action.payload };

    default:
      return state;
  }
}

/* Action Creators */
function setEvents(events) {
  return { type: EVENTS_SET, payload: events };
}

function setEvent(event) {
  return { type: EVENT_SET, payload: event };
}

export function eventsGet() {
  return async dispatch => {
    try {
      const response = await apiGetEvents();
      const events = [...response.data];
      dispatch(setEvents(events));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}

export function eventGet(id) {
  return async dispatch => {
    try {
      const response = await apiGetEvent(id);
      const event = response.data;
      dispatch(setEvent(event));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}

export function eventAck(id) {
  return async dispatch => {
    try {
      const response = await apiAcknowledge(id);
      const event = response.data;
      dispatch(setEvent(event));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
