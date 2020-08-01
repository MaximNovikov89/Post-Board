import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap';
import HomeNavbar from './NavBar/Navbar';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard/ProfileCard';
import Logo from '../../Assest/Images/IconLogo.png';
import List from './Post-List/PostList';
import PostModal from './Modal/Modal';


export default function HomePage() {

    //==========Styles-MaterialUI==========//
    const useStyles = makeStyles((theme) => ({
        logo: {
            width: '80px',
            height: '80px'
        },
        logoUrl: {
            backgroundImage: `url(${Logo})`,
        }
    }));
    const classes = useStyles();
    //==========Styles-MaterialUI==========//


    const [currentUser, setCurrentUser] = useState({});
    const user = useSelector(state => state.user);
    const [isModal, setIsModal] = useState(false);

    //==========UseEffect==========//
    useEffect(() => {
        if (user) {
            setCurrentUser(user);
        }
    }, [user]);
    //==========UseEffect==========//


    const handleModal = () => {
        setIsModal(!isModal);
    }

    return (
        <div style={{ backgroundColor: '#f5f5f5', height: '100vh', width: '100vw' }}>
            <Row >
                <Col xs='12' >
                    <HomeNavbar />
                </Col>
            </Row>

            <Row>
                <Col xs='2'>
                    <ProfileCard
                        avatarUrl={currentUser.photoURL}
                        userName={currentUser.displayName}
                        handleModal={handleModal} /></Col>

                <Col xs='8'>

                    <Row>
                        <Col xs='12' style={{ overflowY: 'auto', maxHeight: '100vh', padding: '3rem' }}>

                            {isModal ? <PostModal handleModal={handleModal} /> : <List />}

                        </Col>
                    </Row>

                </Col>


                <Col xs='2' style={{ backgroundColor: '#E0FBFC', zIndex: '1' }}>
                    <Row style={{ marginTop: '2rem' }}>
                        <Col xs='3' />

                        <Col xs='6'><h3>Friends</h3></Col>
                        <Col xs='3' />
                    </Row>
                    <Row>
                        <Col xs='1'>Icon</Col>
                        <Col xs='1' />
                        <Col><p>Friends Name</p></Col>
                        <Col xs='2' />
                    </Row>
                    <Row>
                        <Col xs='1'>Icon</Col>
                        <Col xs='1' />
                        <Col><p>Friends Name</p></Col>
                        <Col xs='2' />
                    </Row>
                    <Row>
                        <Col xs='1'>Icon</Col>
                        <Col xs='1' />
                        <Col><p>Friends Name</p></Col>
                        <Col xs='2' />
                    </Row>
                </Col>


            </Row>
        </div >

    )
}
