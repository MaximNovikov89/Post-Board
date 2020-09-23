import React, { useEffect } from 'react';
import firebase from "firebase/app";
import * as getPostsAction from '../../../../store/actions/getPosts';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, CardFooter, Row, Col } from 'framework7-react';
import { IconButton, makeStyles, Badge } from '@material-ui/core';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        rootSnakbar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },

    },
}));

export default function PostCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const post = props.post;

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dispatch(getPostsAction.getPosts());
    })

    const handleLike = async () => {
        let userId = currentUser.uid;
        const globalPosts = await firebase.firestore().collection('globalPosts').get();

        globalPosts.docs.map(doc => {
            let postId = doc.id
            let isLiked = doc.data().liked.findIndex(id => id === userId);

            if (isLiked === -1) {
                let docRef = firebase.firestore().doc(`globalPosts/${postId}`);

                docRef.get().then(
                    function (doc) {
                        let likedPost = doc.data();
                        likedPost.liked.push(userId);
                        likedPost.likes = likedPost.likes + 1;
                        docRef.update(likedPost);
                    }
                );
            }
            else {
                handleClick();
            }
        });
        dispatch(getPostsAction.getPosts());
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Card style={{ margin: '0 0 20px 20px', border: '1px solid black', width: '75%' }
            }>

                <CardHeader style={{ backgroundColor: '#8ebfde' }}>
                    <Row>
                        <Col>
                            <div ><img src={post.photoURL} width="34" height="34" alt="ProfilePicture" /><span style={{ padding: '15px', fontFamily: 'acme, cursive', fontSize: '110%' }}>{post.author}</span></div>
                        </Col>
                        <Col ><div style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Acme, sans-serif' }} >{post.header}</div></Col>
                        <Col style={{ textAlign: 'end' }}><EventNoteTwoToneIcon />{post.createdAt.date}<br />{post.createdAt.time}</Col>
                    </Row>
                </CardHeader>


                <CardContent>
                    <Row style={{ position: 'relative', left: '15px' }}>
                        <Col style={{ padding: '10px', fontSize: '120%' }}>{post.content}</Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col width="7">
                            {props.post.postImageURL ? <img src={props.post.postImageURL} width="100%" height='95%' alt="Uploaded Picture" /> : ""}
                        </Col>
                        <Col></Col>
                    </Row>
                </CardContent>


                <CardFooter className="no-border" style={{ marginTop: '5%' }}>
                    <Row >
                        <Col>
                            <IconButton component="span" color='primary' onClick={handleLike}>
                                <ThumbUpAlt />
                            </IconButton>
                            <Badge badgeContent={props.post.likes} color="primary" />
                        </Col>
                    </Row>
                </CardFooter>

            </Card >
            <div className={classes.rootSnakbar}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        You already liked this post!
                     </Alert>
                </Snackbar>

            </div>
        </>
    )
}
