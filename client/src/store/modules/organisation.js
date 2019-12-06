import { apiGetOrganisation } from '../../api';

/* Actions */
const ORGANISATION_SET = 'ORGANISATION_SET';

const initialState = {
  id: -1,
  name: '',
  organisationUnits: [],
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORGANISATION_SET:
      const { id, name, organisation_units } = action.payload;
      return { ...state, id, name, organisationUnits: organisation_units };
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
