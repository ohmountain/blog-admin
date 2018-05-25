import {
    ROUTER_PATH,
    SET_COLLAPSED,
    set_collapsed as setCollapsed
} from '../action/common.js';

import {
    List
} from 'immutable';

const router_path = (state = List(['Administrator', '首页']), action) => {

    if (action.type === ROUTER_PATH) {
        let tmp = ['Administrator'];

        for (let i in action.path) {
            tmp.push(action.path[i]);
        }

        return tmp;
    }

    return state;
};

const set_collapsed = (state = false, action) => {

    if (action.type === SET_COLLAPSED && state !== action.collapsed) {
        return !!action.collapsed;
    }

    return state;
};

export {
    router_path,
    set_collapsed
};
