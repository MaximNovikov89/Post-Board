import React, { useState, useEffect } from 'react';
import * as addLikeAction from '../../../../store/actions/addLike';
import * as isLikedAction from '../../../../store/actions/isLiked';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, CardFooter, Row, Col } from 'framework7-react';
import { IconButton, makeStyles, Badge } from '@material-ui/core';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import WarningIcon from '@material-ui/icons/Warning';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled"  {...props} />;
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
    const isLiked = useSelector(state => state.isLiked.isLiked)
    const post = props.post;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isLiked) {
            handleClick();
            dispatch(isLikedAction.setIsLiked(false));
        }
    }, [isLiked, dispatch])

    const likeHandler = async () => {
        dispatch(addLikeAction.handleLike(currentUser.uid, post.id));

    };


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
                            <IconButton component="span" color='primary' onClick={likeHandler}>
                                <ThumbUpAlt />
                            </IconButton>
                            <Badge badgeContent={props.post.likes} color="primary" />
                        </Col>
                    </Row>
                </CardFooter>

            </Card >
            <div className={classes.rootSnakbar}>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>

                    <Alert icon={<WarningIcon />} style={{ padding: '0.25rem 0.80rem' }}>
                        You already liked this post!
                     </Alert>

                </Snackbar>

            </div>
        </>
    )
}
