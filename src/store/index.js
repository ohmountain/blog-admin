import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import AppReducer from '../reducer/index.js';

export default createStore(AppReducer, applyMiddleware(createLogger));
