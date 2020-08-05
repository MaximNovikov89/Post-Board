
const initialState = {
    user: null,
    postListType: 'global',
    posts: [],
};

function rootReducer(state = initialState, actions) {
    switch (actions.type) {

        case 'ADD_USER_OBJ':
            return {
                ...state,
                user: actions.value
            }

        case 'SET_POST_LIST_TYPE':
            return {
                ...state,
                postListType: actions.value
            }

        case 'SET_POSTS':
            return {
                ...state,
                posts: actions.value
            }
        default: return state;
    }
}

export default rootReducer;