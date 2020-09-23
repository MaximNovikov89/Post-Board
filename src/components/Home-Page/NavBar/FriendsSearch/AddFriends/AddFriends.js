import React from 'react';
import { Card, CardHeader, Avatar, CardActions, IconButton, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import firebase from "firebase/app";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    mainCard: {
        margin: '10px',
        backgroundColor: '#c8ddde',

    }
}));

export default function AddFriends(props) {
    const classes = useStyles();
    const friend = props.user;
    const currentUser = useSelector(state => state.currentUser.currentUser);

    //==========Methods=========//
    const back = () => {
        props.goBack('back');
    }
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
        back();
    };

    return (

        <Card className={classes.mainCard}>
            <CardHeader className="no-border"
                avatar={
                    <Avatar src={friend.photoURL} className={classes.large} ></Avatar>
                }
                title={<Typography align='left'>{friend.displayName}</Typography>}
            />
            {
                friend.email === currentUser.email

                    ? <CardActions >
                        <IconButton component="span" disabled>
                            <HighlightOffIcon fontSize="small" />
                        </IconButton>
                        <Typography>It's you!</Typography>
                    </CardActions>
                    : <CardActions >
                        <IconButton component="span" color='primary'>
                            {/* <AddCircleOutlineIcon fontSize="small" onClick={handleAddFriend} /> */}
                            <Typography onClick={handleAddFriend} align='center' >Add Friend</Typography>
                        </IconButton>

                    </CardActions>
            }


        </Card >
    )
}
