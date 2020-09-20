import { GET_POSTS } from '../actions/getPosts';

const initialState = {
    posts: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};