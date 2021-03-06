import React from 'react';
import { useSelector } from 'react-redux';
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography
} from '@material-ui/core';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: '33%',
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function ProfileCard(props) {
    //==========States=========//
    const classes = useStyles();
    const member = useSelector(state => state.currentUser.currentUser);
    const friendsCount = member.friends.length;
    const memberSinceDate = member.metadata.creationTime.split(" ");
    const memberSince = memberSinceDate[1] + " " + memberSinceDate[2] + " " + memberSinceDate[3];


    //==========Methods=========//
    const handleOpenModal = () => {
        props.handleModal();
    }

    return (

        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={props.avatarUrl} ></Avatar>
                }
                title={<Typography style={{ fontFamily: 'acme, cursive', fontSize: '120%' }}>{props.userName}</Typography>}
                subheader={`Member since ${memberSince}`}
            />
            <CardContent>
                <Typography variant="button" color="textSecondary" component="p">
                    {friendsCount !== 0 ? `${friendsCount} Friends` : 'No friends :('}
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton component="span" color='primary'>
                    <CloudUploadOutlinedIcon fontSize="large" onClick={handleOpenModal} />
                </IconButton>
                <Typography style={{ fontFamily: 'lobster, cursive', fontSize: '150%' }}>Post!</Typography>
            </CardActions>

        </Card>
    );
}
