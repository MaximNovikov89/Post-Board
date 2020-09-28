import { IS_LIKED } from '../actions/isLiked';

const initialState = {
    isLiked: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_LIKED:
            return {
                isLiked: action.payload
            };
        default:
            return state;
    }
};