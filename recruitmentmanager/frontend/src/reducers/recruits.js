import { GET_RECRUITS, DELETE_RECRUIT, ADD_RECRUIT, CLEAR_RECRUITS } from '../actions/types.js';

const initialState = {
  recruits: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECRUITS:
      return {
        ...state,
        recruits: action.payload,
      };
    case DELETE_RECRUIT:
      return {
        ...state,
        recruits: state.recruits.filter((recruit) => recruit.id !== action.payload),
      };
    case ADD_RECRUIT:
      return {
        ...state,
        recruits: [...state.recruits, action.payload],
      };
    case CLEAR_RECRUITS:
      return {
        ...state,
        recruits: [],
      }
  default:
    return state;
  }
}