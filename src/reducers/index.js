import { combineReducers } from 'redux'
import calculateReducer from './calculateReducer'
export default combineReducers({calculate: calculateReducer})