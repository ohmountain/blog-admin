const GET_POST = 'GET_POST';
const PUT_POST = 'PUT_POST';
const PATCH_POST = 'PATCH_POST';

const GET_POST_LIST = 'GET_POST_LIST';

const get_post = id => {
    action: GET_POST,
    id
};

const put_post = content => {
    action: PUT_POST,
    content
};

const patch_post = (id, content) => {
    action: PATCH_POST,
    id,
    content
};

const get_post_list = (page, limit) => {
    action: GET_POST_LIST,
    page,
    limit
};


export {
    GET_POST,
    PUT_POST,
    PATCH_POST,
    GET_POST_LIST,

    get_post,
    put_post,
    patch_post,
    get_post_list
};
