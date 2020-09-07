import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Row,
    Col,
} from 'reactstrap';
import { makeStyles, Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { auth } from '../../../firebase/firebase.utils';
import Logo from '../../../Assest/Images/IconLogo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '22ch',
        }
    },
    navBar: {
        backgroundColor: '#E0FBFC',
        boxShadow: "2px 3px 3px 0px rgba(108, 105, 112,0.25),0px 10px 25px 0px rgba(110, 120, 130,5)",
        zIndex: '2',
        maxHeight: '5rem',
        padding: '0.6rem',
    },
    logoImg: { //Broken responsivness - ***FIX***
        // width: '4.5rem',
        // position: 'relative',
        // color: 'black',
        cursor: 'pointer',
        width: theme.spacing(19),
        height: theme.spacing(19),
    },
    navBarBrand: {
        paddingLeft: '15px',
        cursor: 'default',
        fontSize: '25px'
    },
}));

const HomeNavbar = (props) => {

    const [inputValue, setInputValue] = useState('');
    const history = useHistory();
    const classes = useStyles();


    //==========Methods=========//

    const handleSignOut = async () => {
        await auth.signOut();
        history.push('/log-in');
    }

    const startSearch = (e) => {
        props.handleSearch(e, inputValue);
    }


    return (

        <Navbar className={classes.navBar} >
            <Row style={{ width: '100%' }}>
                <Col xs='1'></Col>

                <Col xs='1' >
                    <Avatar className={classes.logoImg} src={Logo} alt='logo' onClick={() => history.push('/homepage')}></Avatar>
                </Col>

                <Col xs='2' style={{ paddingLeft: '0' }}></Col>

                <Col xs='3'>
                    {/* <NavbarBrand className={classes.navBarBrand}>Post-Board</NavbarBrand> */}

                </Col>

                <Col xs='3'>
                    <TextField
                        id="standard-basic"
                        label="Search friends"
                        onChange={(e) => setInputValue(e.target.value)}
                        autoComplete="off" />

                    {/* //Broken responsivness - ***FIX*** */}
                    <IconButton color="primary" component="span" style={{ marginTop: '0.5rem' }} onClick={() => startSearch('friends')}>
                        <SearchIcon />
                    </IconButton>
                </Col>

                <Col xs='1'>
                    <IconButton color="secondary" component="span" onClick={handleSignOut}><ExitToAppIcon /></IconButton>
                </Col>
            </Row>

        </Navbar >
    );
}

export default HomeNavbar;

//<a href='https://pngtree.com/so/icon'>icon png from pngtree.com</a>
