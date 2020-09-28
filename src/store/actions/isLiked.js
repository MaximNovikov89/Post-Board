export const IS_LIKED = 'IS_LIKED';

export const setIsLiked = val => dispatch => {
    dispatch({ type: IS_LIKED, payload: val })
}