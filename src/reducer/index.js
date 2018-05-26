import { combineReducers } from 'redux';

import { router_path, set_collapsed } from './common.js';
import { get_post, put_post, get_category } from './posts.js';

export default combineReducers({
    router_path,
    collapsed: set_collapsed,
    posts: get_post,
    category: get_category
});
