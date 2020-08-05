import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Col
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth } from '../../../firebase/firebase.utils';
import Logo from '../../../Assest/Images/IconLogo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    navBar: {
        backgroundColor: '#E0FBFC',
        boxShadow: "2px 3px 3px 0px rgba(108, 105, 112,0.25),0px 10px 25px 0px rgba(110, 120, 130,5)",
        zIndex: '2',
        maxHeight: '4.2rem',
        padding: '0.6rem'
    }
}));

const HomeNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const toggle = () => setIsOpen(!isOpen);
    const classes = useStyles();



    const handleSignOut = async () => {
        await auth.signOut();
        history.push('/log-in');
    }

    return (
        <div >

            <Navbar className={classes.navBar} >
                <Col xs='2'>
                    <img style={{ width: '4rem', height: '4rem', position: 'relative' }} src={Logo}></img>
                    <NavbarBrand>Post-Board</NavbarBrand>
                </Col>

                <Col xs='1' style={{ paddingLeft: '0' }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search Friends" />
                    </form>
                </Col>

                <Col xs='5'></Col>

                <Col xs='2'>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search Posts" />
                    </form>
                </Col>
                <Col xs='1'></Col>
                <Col xs='1'>
                    <Button color="secondary" onClick={handleSignOut}>Log Out</Button>
                </Col>

            </Navbar>

        </div>
    );
}

export default HomeNavbar;

//<a href='https://pngtree.com/so/icon'>icon png from pngtree.com</a>
