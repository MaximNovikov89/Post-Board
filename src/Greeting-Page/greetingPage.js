import React from 'react';
import './greetingPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import backgroundImage from '../Assest/Images/backGroundMain.jpg';


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
    const history = useHistory();

    const useLink = () => {
        history.push('/sign-up');
    }

    return (

        <div className={classes.backGround}>
            <div className='mainCoverGrid'>
                <div className='mainCover'>
                    <h1 className='mainHeader'>Post-Board</h1>
                    <h3 className='mainSubHeader'>Share your thoughts pictures and work or what ever is on your to mind</h3>
                    <Button variant="contained" color="primary" className='mainJoinButton' onClick={useLink}>
                        Join
                    </Button>
                </div>
            </div>

        </div>
    );
}