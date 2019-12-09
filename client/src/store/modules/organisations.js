import { apiGetOrganisations, apiGetOrganisation } from '../../api';

/* Actions */
const ORGANISATIONS_SET = 'ORGANISATIONS_SET';

const ORGANISATION_SET = 'ORGANISATION_SET';

const initialState = {
  allOrganisations: [],
  selectedOrganisation: {
    id: -1,
    name: '',
    organisationUnits: [],
  },
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORGANISATIONS_SET:
      return { ...state, allOrganisations: [...action.payload] };

    case ORGANISATION_SET:
      const { id, name, organisation_units } = action.payload;
      return {
        ...state,
        selectedOrganisation: { id, name, organisationUnits: organisation_units },
      };
    default:
      return state;
  }
}

/* Action Creators */
function setOrganisations(organisations) {
  return { type: ORGANISATIONS_SET, payload: organisations };
}

function setOrganisation(organisation) {
  return { type: ORGANISATION_SET, payload: organisation };
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
