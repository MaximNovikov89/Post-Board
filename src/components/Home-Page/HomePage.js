import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap';
import HomeNavbar from './NavBar/Navbar';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard/ProfileCard';
import Logo from '../../Assest/Images/IconLogo.png';
import PostList from './Post-List/PostList';
import PostModal from './Modal/Modal';
import FriendsSearch from './FriendsSearch/FriendsSearch';
import FriendsList from './FriendsList/FriendsList';


export default function HomePage() {

    //==========Styles-MaterialUI==========//
    const useStyles = makeStyles((theme) => ({
        logo: {
            width: '70px',
            height: '70px'
        },
        logoUrl: {
            backgroundImage: `url(${Logo})`,
        },
        primaryDiv: {
            backgroundColor: '#f5f5f5',
            height: '100vh',
            width: '100%'
        },
        profileCard: {
            marginTop: '6.2%',
        }
    }));
    const classes = useStyles();


    //==========States=========//
    // const [currentUser, setCurrentUser] = useState({});
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const [isModal, setIsModal] = useState(false);
    const [screenView, setScreenView] = useState(<FriendsList currentUser={currentUser} />)


    //==========UseEffect==========//
    // useEffect(() => {
    //     if (user) {
    //         setCurrentUser(user);
    //     }
    // }, [user]);

    //==========Methods=========//
    const handleModal = () => {
        setIsModal(!isModal);
    }
    const handleSearch = (type, value) => {
        if (type === 'friends') {
            setScreenView(<FriendsSearch inputSearch={value} goBack={handleSearch} />);
        }
        else {
            setScreenView(<FriendsList currentUser={currentUser} />);
        }
    }

    return (
        <div className={classes.primaryDiv} >
            <Row>
                <Col xs='12' >
                    <HomeNavbar handleSearch={handleSearch} />
                </Col>
            </Row>

            <Row style={{ margin: 0 }} className={classes.primaryDiv}>

                <Col xs='3' className={`d-flex justify-content-center ${classes.profileCard}`}>
                    <ProfileCard

                        avatarUrl={currentUser.photoURL}
                        userName={currentUser.displayName}
                        handleModal={handleModal} />
                </Col>

                <Col xs='7'>

                    <Row >
                        <Col xs='12' style={{ overflowY: 'scroll', maxHeight: '90vh', padding: '2rem' }}>

                            {isModal ? <PostModal handleModal={handleModal} /> : <PostList />}

                        </Col>
                    </Row>

                </Col>


                <Col xs='2' style={{ backgroundColor: '#E0FBFC', zIndex: '1' }}>
                    {/* <FriendsList currentUser={currentUser} /> */}
                    {screenView}
                </Col>


            </Row>
        </div >

    )
}

// Credits:
{/* <a href='https://pngtree.com/so/hanging-bulletin-board'>hanging-bulletin-board png from pngtree.com</a> */ }