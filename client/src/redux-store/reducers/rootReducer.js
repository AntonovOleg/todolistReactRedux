import { todoReducer } from './todoReducer.js';
import { filterReducer } from './filterReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ todoReducer, filterReducer });

export default rootReducer;
