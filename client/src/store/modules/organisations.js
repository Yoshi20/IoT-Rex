import { apiGetOrganisations } from '../../api';

/* Actions */
const ORGANISATIONS_SET = 'ORGANISATIONS_SET';

const initialState = {
  orgs: [],
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORGANISATIONS_SET:
      return { ...state, orgs: [...action.payload] };
    default:
      return state;
  }
}

/* Action Creators */
function setOrganisations(organisations) {
  return { type: ORGANISATIONS_SET, payload: organisations };
}

export function organisationsGet() {
  return async dispatch => {
    try {
      const response = await apiGetOrganisations();
      const organisations = response.data;
      dispatch(setOrganisations(organisations));
    } catch (e) {
      console.log(e);
      // throw new Error(e);
    }
  };
}
