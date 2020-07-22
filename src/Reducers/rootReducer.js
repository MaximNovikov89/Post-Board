import uuid from 'react-uuid';
// import * as actions from '../Actions/actions';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: uuid()
};

const usersList = []

function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'ADD_FIRST_NAME':
            return {
                ...state,
                firstName: actions.value
            }
        case 'ADD_LAST_NAME':
            return {
                ...state,
                lastName: actions.value
            }
        case 'ADD_EMAIL':
            return {
                ...state,
                email: actions.value
            }
        case 'ADD_PASSWORD':
            return {
                ...state,
                password: actions.value
            }
        default: return state;
    }
}

export default rootReducer;