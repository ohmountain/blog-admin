import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import PostsReducer from '../reducer/posts.js';

export default createStore(PostsReducer, applyMiddleware(createLogger));
