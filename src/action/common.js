///
/// Router Path
///
const ROUTER_PATH = 'ROUTER_PATH';

const router_path = path => {
    return {
        type: ROUTER_PATH,
        path
    };
};

///
/// Sider Collapse
///
const SET_COLLAPSED = 'SET_COLLAPSED';
const set_collapsed = collapsed => {
    return {
        type: SET_COLLAPSED,
        collapsed
    };
};


export {
    ROUTER_PATH,
    router_path,

    SET_COLLAPSED,
    set_collapsed
}
