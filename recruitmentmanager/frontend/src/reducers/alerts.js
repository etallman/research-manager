import { CREATE_ALERT } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ALERT:
      return (state = action.payload);
    default: 
      return state;
  }
}