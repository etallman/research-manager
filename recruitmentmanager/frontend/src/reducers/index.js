import { combineReducers } from 'redux';
import recruits from './recruits';
import errors from './errors';
import messages from './alerts';
import auth from './auth';


export default combineReducers({
  recruits,
  errors,
  messages, 
  auth,
})