// import uuid from 'react-uuid';
// import * as actions from '../Actions/actions';

const initialState = {
    user: null
};

function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'Add_USER_OBJ':
            return {
                ...state,
                user: actions.value

            }

        default: return state;
    }
}

export default rootReducer;