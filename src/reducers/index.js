import { combineReducers } from 'redux-immutable';
import timer from './timer';
import data from './data';

export default combineReducers({
  timer,
  data,
});
