import React from 'react';
import { Row, Col } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import firebase from "firebase/app";
import { useSelector } from 'react-redux';
import { Avatar, Typography } from '@material-ui/core';





export default function FriendsList() {
    const friends = useSelector(state => state.currentUser.currentUser.friends);
    const currentUser = useSelector(state => state.currentUser.currentUser);

    const handleDeleteFriend = (email) => {
        const docRef = firebase.firestore().doc(`users/${currentUser.uid}`);

        docRef
            .get()
            .then(
                function (doc) {
                    let data = doc.data();

                    try {
                        if (data.friends) {
                            //Filtering friends Array.
                            let filteredFriends = data.friends.filter(friend => friend.email !== email);

                            //Updating fridns Array in the database.
                            docRef.update({
                                ...data,
                                friends: filteredFriends
                            })
                        }
                    }
                    catch (error) {
                        console.log(`Error Deleting Friend ${error}`);
                    }
                });
    }

    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col xs='3' />

                <Col xs='6'><h3 style={{ fontFamily: 'Lobster, cursive' }}>Friends</h3></Col>
                <Col xs='3' />
            </Row>
            {friends ? friends.map(friend =>
                <Row key={friend.displayName} style={{ marginBottom: '10px' }}>
                    <Col xs='1'><Avatar src={friend.photoURL} width="34" height="35" /></Col>
                    <Col xs='1' />
                    <Col xs='7' style={{ paddingTop: '2%' }}><Typography style={{ fontFamily: 'acme, cursive', fontSize: '120%' }}>{friend.displayName}</Typography></Col>
                    <Col xs='1'>
                        <IconButton
                            component="span"
                            style={{
                                marginBottom: '5px',
                                padding: '0px 4px 3px 4px'
                            }}
                            onClick={() => handleDeleteFriend(friend.email)}>
                            <HighlightOffIcon /></IconButton></Col>
                </Row>
            ) : <div></div>
            }
        </>
    )
}
