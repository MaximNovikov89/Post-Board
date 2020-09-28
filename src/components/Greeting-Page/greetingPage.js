import React from 'react';
import './greetingPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Assest/Images/backGroundMain.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    backGround: {
        flexGrow: 1,
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    },
}));

export default function GreetingPage() {
    const classes = useStyles();
    const greetingText = ['Share your thoughts pictures and work ', <br />, 'or what ever is on your mind'];


    return (
        <div className={classes.backGround}>
            <div className='mainCoverGrid'>
                <div className='mainCover'>
                    <h1 className='mainHeader'>Post-Board</h1>
                    <h3 className='mainSubHeader'>{greetingText}</h3>

                    <Link to='/log-in' className='joinLink'>
                        <Button variant="contained" color="primary" className='mainJoinButton'>Join</Button>
                    </Link>

                </div>
            </div>

        </div>
    );
}