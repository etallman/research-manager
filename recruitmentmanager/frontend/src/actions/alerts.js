import { CREATE_ALERT, GET_ERRORS } from './types';

export const createAlert = (message) => {
  return {
    type: CREATE_ALERT,
    payload: message
  };
};

export const returnErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: { message, status}
  };
};