import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import firebase from "firebase/app";
import * as actions from '../../../Actions/actions';
import PostCard2 from '../Post-Card/PostCard2';




const List = () => {

    //==========States=========//
    const user = useSelector(state => state.user);
    const posts = useSelector(state => state.posts);
    const postType = useSelector(state => state.postListType);

    const dispatch = useDispatch();
    var sortedPosts = posts.sort((a, b) => (a.exactTime > b.exactTime) ? -1 : 1);

    //==========useEffect=========//

    //  Fetching Data from firebase and updating postList  //
    useEffect(() => {
        if (postType === 'users') {
            try {
                //tries to access specific user document in the database using current user ID.
                firebase
                    .firestore()
                    .doc(`users/${user.uid}`)
                    .get()
                    .then(function (doc) {

                        if (doc.exists) {
                            let data = doc.data();
                            dispatch({ type: actions.SET_POSTS, value: data.posts });
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
        else {
            try {
                //tries to access Global post collection in the database, Setting global post list.
                firebase
                    .firestore()
                    .collection('globalPosts')
                    .get()
                    .then(function (doc) {
                        if (doc) {

                            let globalPostsArr = [];
                            let data = doc.docs;

                            data.map(post => {
                                globalPostsArr.push(post.data())
                            })
                            dispatch({ type: actions.SET_POSTS, value: globalPostsArr });
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
        return () => { }
    }, [postType]);



    //  Setting Display List  //
    // useEffect(() => {
    //     if (posts) {
    //         if (!displayList) {
    //             setDisplayList(<div />)
    //         }
    //     }
    // }, []);

    return (
        <div>
            {sortedPosts.map(post =>

                <PostCard2 key={post.id} post={post} user={user} />


            )}
        </div>
    )
};

export default List;