import { apiGetOrganisation } from '../../api';

/* Actions */
const ORGANISATION_SET = 'ORGANISATION_SET';

const initialState = {};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORGANISATION_SET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

/* Action Creators */
function setOrganisation(organisation) {
  return { type: ORGANISATION_SET, payload: organisation };
}

export function organisationGet(id) {
  return async dispatch => {
    try {
      const response = await apiGetOrganisation(id);
      const organisation = response.data;
      dispatch(setOrganisation(organisation));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
