import { GET_USERS } from '../actions/getUsers';

const initialState = {
    usersList: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                usersList: action.payload
            };
        default:
            return state;
    }
};