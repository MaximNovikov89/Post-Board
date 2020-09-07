import React from 'react';
import { Card, CardHeader, } from 'framework7-react';
import { useSelector } from 'react-redux';
import firebase from "firebase/app";




export default function AddFriends(props) {
    const friend = props.user;
    const currentUser = useSelector(state => state.user);

    //==========Methods=========//
    // const back = () => {
    //     props.goBack('back');
    // }
    const handleAddFriend = () => {
        const docRef = firebase.firestore().doc(`users/${currentUser.uid}`);

        docRef
            .get()
            .then(
                function (doc) {
                    let data = doc.data();

                    try {
                        if (data.friends) {
                            //Creating friends emails Array 
                            let emailArr = []
                            data.friends.map(element => {
                                emailArr.push(element.email)
                            })
                            //Searching if the current is already friends with this friend.
                            //*This friend = searched friend.
                            let friendExist = false;
                            friendExist = emailArr.find(e => e === friend.email)
                            if (friendExist) {
                                alert(`${friend.displayName} is already a friend`);
                                friendExist = false;
                            }
                            else {

                                docRef.update({
                                    ...data,
                                    friends: [...data.friends, friend]
                                })
                            }
                        }
                        else {
                            docRef.set({ ...data, friends: [friend] });
                        }

                    }
                    catch (error) {
                        console.log(`Error adding Friend ${error}`);
                    }
                });
        // back();
    };

    return (

        <Card >
            <CardHeader className="no-border">
                <span >
                    <img src={friend.photoURL} width="34" height="34" /></span>
                <span >{friend.displayName}</span>
            </CardHeader>


            <button onClick={handleAddFriend}>Add Friend</button>


        </Card>

    )
}
