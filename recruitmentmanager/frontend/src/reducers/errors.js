import { GET_ERRORS } from '../actions/types';

const initialState = {
  alert: {},
  status: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        alert: action.payload.alert,
        status: action.payload.status
      }
      default:
        return state;
  }
}