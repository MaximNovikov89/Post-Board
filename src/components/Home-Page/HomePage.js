import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap';
import HomeNavbar from './NavBar/Navbar';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard/ProfileCard';
import Logo from '../../Assest/Images/IconLogo.png';
import PostList from './Post-List/PostList';
import PostModal from './postPrompt/PostPrompt';
import FriendsSearch from './NavBar/FriendsSearch/FriendsSearch';
import FriendsList from './FriendsList/FriendsList';
import LoadingPage from '../loadingPage/LoadingPage';


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

    //==========State=========//
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const [isModal, setIsModal] = useState(false);
    const [screenView, setScreenView] = useState(<PostList />)

    //==========Methods=========//
    const handleModal = () => {
        setIsModal(!isModal);
    }
    const handleSearch = (type, value) => {
        if (type === 'friends') {
            setScreenView(<FriendsSearch inputSearch={value} goBack={handleSearch} />);
        }
        else {
            setScreenView(<PostList />);
        }
    }
    if (currentUser) {
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

                    <Col xs='6'>

                        <Row >
                            <Col xs='12' style={{ overflowY: 'scroll', maxHeight: '90vh', padding: '2rem' }}>

                                {isModal ? <PostModal handleModal={handleModal} /> : screenView}

                            </Col>

                        </Row>

                    </Col>



                    <Col xs='3' style={{ backgroundColor: '#E0FBFC', zIndex: '1' }}>

                        <FriendsList />
                        {/* {screenView} */}


                    </Col>


                </Row>
            </div >

        )
    }
    return (
        <LoadingPage />
    )

}

// Credits:
//<a href='https://pngtree.com/so/hanging-bulletin-board'>hanging-bulletin-board png from pngtree.com</a>