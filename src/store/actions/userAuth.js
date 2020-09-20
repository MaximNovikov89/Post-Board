export const AUTHENTICATE = 'AUTHENTICATE';

export const setCurrentUser = (user) => (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: user })
}