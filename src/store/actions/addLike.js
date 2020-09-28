import firebase from "firebase/app";
import * as getPostsAction from '../../store/actions/getPosts';
import * as isLikedAction from '../../store/actions/isLiked';


export const handleLike = (userId, postId) => async dispatch => {
    try {
        const docRef = firebase.firestore().doc(`globalPosts/${postId}`);

        docRef
            .get()
            .then(
                function (doc) {
                    let post = doc.data();
                    let isLiked = post.liked.indexOf(userId);
                    let currentPost;
                    if (isLiked !== -1) {
                        dispatch(isLikedAction.setIsLiked(true));
                    }
                    else {
                        currentPost = { ...post, likes: post.likes + 1, liked: [...post.liked, userId] };
                        docRef.update({ ...currentPost });
                        dispatch(getPostsAction.getPosts());
                    }
                }
            );
    }
    catch (error) {
        console.log(error);
    }
    dispatch(getPostsAction.getPosts())
}