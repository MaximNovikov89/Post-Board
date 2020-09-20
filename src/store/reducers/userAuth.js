import { AUTHENTICATE } from '../actions/userAuth';

const initialState = {
    currentUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                currentUser: action.payload
            };
        default:
            return state;
    }
};