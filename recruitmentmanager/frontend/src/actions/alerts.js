import { CREATE_ALERT, GET_ERRORS } from './types';

export const createAlert = (alert) => {
  return {
    type: CREATE_ALERT,
    payload: alert
  };
};

export const returnErrors = (alert, status) => {
  return {
    type: GET_ERRORS,
    payload: { alert, status}
  };
};