import { List } from 'immutable';
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

const get_category = (state = List(), action) => {
    if (action.type === PostsAction.GET_CATEGORY) {

        //
        // Do GET_CATEGORY and return new state
        //

        return new List([{
            id: 1,
            title: 'Rust',
            sort: 1
        }, {
            id: 2,
            title: 'Rust_1',
            sort: 2
        }, {
            id: 3,
            title: 'Rust_2',
            sort: 3
        }]);

    }

    return state;
};

export {
    get_post,
    put_post,
    get_category
};
