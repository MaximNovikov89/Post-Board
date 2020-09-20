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
        height: '40%',
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
    const memberSince = member.metadata.creationTime.slice(5, 16);

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
                title={props.userName}
                subheader={`Member since ${memberSince}`}
            />
            <CardContent>
                <Typography variant="button" color="textSecondary" component="p">
                    {friendsCount !== 0 ? `${friendsCount} Friends` : 'No friends :('}
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton component="span">
                    <CloudUploadOutlinedIcon fontSize="large" onClick={handleOpenModal} />
                </IconButton>
                <Typography>Posts!</Typography>
            </CardActions>

        </Card>
    );
}
