const GET_POST = 'GET_POST';
const PUT_POST = 'PUT_POST';
const PATCH_POST = 'PATCH_POST';

const GET_CATEGORY = 'GET_CATEGORY';

const GET_POST_LIST = 'GET_POST_LIST';

const get_post = id => {
    type: GET_POST,
    id
};

const put_post = content => {
    type: PUT_POST,
    content
};

const patch_post = (id, content) => {
    type: PATCH_POST,
    id,
    content
};

const get_post_list = (page, limit) => {
    type: GET_POST_LIST,
    page,
    limit
};

const get_category = () => {
    return {
        type: GET_CATEGORY
    };
};

export {
    GET_POST,
    PUT_POST,
    PATCH_POST,
    GET_POST_LIST,
    GET_CATEGORY,

    get_post,
    put_post,
    patch_post,
    get_post_list,
    get_category
};
