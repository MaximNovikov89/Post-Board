// import React, { useState, useEffect } from 'react';
// import './ProfileCard.scss';
// import { useSelector } from 'react-redux';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import IconButton from '@material-ui/core/IconButton';


// export default function ProfileCard(props) {


//     const user = useSelector(state => state.user);
//     const [friendsCount, setFriendsCount] = useState(0);

//     useEffect(() => {
//         if (user.friends) {
//             setFriendsCount(user.friends.length)
//         }
//     }, [])

//     const handleOpenModal = () => {
//         props.handleModal();
//     }
//     console.log(user);
//     return (

//         <div>
//             <div className="profileCard">
//                 <img src={props.avatarUrl} alt="avatar" className="profileCard__image" />
//                 <p className="card__name">{props.userName}</p>

//                 <div className="grid-container">
//                     <div className="grid-child-followers">
//                         {`${friendsCount} Friends`}
//                     </div>
//                 </div>
//                 <div>
//                     <IconButton style={{ width: '60px' }} onClick={handleOpenModal}><CloudUploadIcon style={{ width: '60px' }} /></IconButton>
//                 </div>

//             </div>


//         </div>


//     )
// }


import React, { useState, useEffect } from 'react';
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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: '30%',
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function ProfileCard(props) {
    const classes = useStyles();

    const user = useSelector(state => state.user);
    const [friendsCount, setFriendsCount] = useState(0);

    useEffect(() => {
        if (user.friends) {
            setFriendsCount(user.friends.length)
        }
    }, [])

    const handleOpenModal = () => {
        props.handleModal();
    }


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={props.avatarUrl} aria-label="recipe" >

                    </Avatar>
                }

                title={props.userName}
                subheader="Optional Content"
            />
            <CardContent>
                <Typography variant="button" color="textSecondary" component="p">
                    {`${friendsCount} Friends`}
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton component="span">
                    <CloudUploadOutlinedIcon fontSize="large" onClick={handleOpenModal} />
                </IconButton>
            </CardActions>

        </Card>
    );
}
