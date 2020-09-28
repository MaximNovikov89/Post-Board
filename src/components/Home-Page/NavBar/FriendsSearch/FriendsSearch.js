import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddFriends from './AddFriends/AddFriends';
import { Row, Col } from 'reactstrap';
import { Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



export default function FriendsSearch(props) {
    //==========States=========//
    const usersList = useSelector(state => state.users.usersList);
    const [filteredUsersList, setFilteredUsersList] = useState([]);

    //==========UseEffect==========//
    useEffect(() => {
        if (props.inputSearch === '') {
            setFilteredUsersList(usersList);
        }
        else {
            let filtered = usersList.filter(user => user.displayName.toLowerCase() === props.inputSearch.toLowerCase())
            if (filtered === []) {
                setFilteredUsersList(false);
            }
            else {
                setFilteredUsersList(filtered);
            }
        }
    }, [props, usersList])

    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col xs='1' style={{ marginRight: '3%' }}>
                    <IconButton color="primary" component="span" size='small' >
                        <ArrowBackIcon onClick={props.goBack} />
                    </IconButton>
                </Col>

                <Col xs='10'>
                    <Typography variant="h4" style={{ fontFamily: 'Lobster, cursive', fontSize: '170%' }}>

                        Add Friend
                    </Typography>
                </Col>
                <Col xs='1' />


            </Row>


            {filteredUsersList.map(user =>
                <div key={user.email}>{user ? <AddFriends user={user} goBack={props.goBack} /> : <div>No user Found...</div>}</div>
            )}

        </>
    )


}
