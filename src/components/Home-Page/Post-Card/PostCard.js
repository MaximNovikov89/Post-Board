import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector } from 'react-redux';
import './Post_card.css';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        maxWidth: 700,
        height: 500,
        maxHeight: 850,
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

export default function PostCard(props) {
    //==========States=========//
    const user = useSelector(state => state.user);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>

                        <img src={props.post.photoURL} alt="avatar" size={10} className="avatar__image" />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.post.displayName}
                subheader={props.post.header}
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.content}

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton style={{ fontSize: '1rem' }}>12</IconButton>
                <IconButton aria-label="share">
                    <ChatBubbleOutlineIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
