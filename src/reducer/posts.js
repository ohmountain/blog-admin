import { Map } from 'immutable';
import { combineReducers } from 'redux';
import * as PostsAction from '../action/posts';

const get_post = (state = '', action) => {

    if (action === PostsAction.GET_POST) {
        return action.content;
    }

    return state;
};

const put_post = (state = '', action) => {

    if (action === PostsAction.GET_POST) {
        return action.content;
    }

    return state;
};

export default combineReducers({
    get_post,
    put_post
});
