import axios from 'axios';
import { createAlert, returnErrors } from './alerts';
import { tokenConfig } from './auth';
import { GET_RECRUITS, DELETE_RECRUIT, ADD_RECRUIT} from './types';

export const getRecruits = () => (dispatch, getState) => {
  axios
  .get('/api/recruits/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_RECRUITS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  }
  
export const deleteRecruit = (id) => (dispatch, getState) => {
      axios
      .delete(`/api/recruits/${id}/`, tokenConfig(getState))
        .then((res) => {
          dispatch(createAlert({ deleteRecruit: 'Study Recruit Deleted' }))
          dispatch({
            type: DELETE_RECRUIT,
            payload: id
          });
        })
        .catch(err => console.log(err.response.data));
}

export const addRecruit = (recruit) => (dispatch, getState) => {
  console.log('hi')
  axios
  .post(`/api/recruits/`, recruit, tokenConfig(getState))
    .then((res) => {
      dispatch(createAlert({ addRecruit: 'Study Recruit Added'}))
      dispatch({
        type: ADD_RECRUIT,
        payload: res.data
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  }