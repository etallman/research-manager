import { combineReducers } from 'redux';
import recruits from './recruits';
import errors from './errors';
import alerts from './alerts';
import auth from './auth';


export default combineReducers({
  recruits,
  errors,
  alerts, 
  auth,
})