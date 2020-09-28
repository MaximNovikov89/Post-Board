import firebase from "firebase/app";
export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => async dispatch => {
    try {
        //tries to access Global post collection in the database, Setting posts in redux store.
        firebase
            .firestore()
            .collection('globalPosts')
            .get()
            .then(function (doc) {
                if (doc) {
                    let posts = [];
                    let data = doc.docs;
                    data.map(post => {
                        posts.push({ ...post.data(), id: post.id })
                    })

                    dispatch({ type: GET_POSTS, payload: posts });
                }
                else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            }).catch(function (error) {
                console.log("Error getting document:", error);
            })
    }
    catch (error) {
        console.log(error);
    }
}