import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddFriends from '../../AddFriends/AddFriends';


export default function FriendsSearch(props) {
    //==========States=========//
    const usersList = useSelector(state => state.usersList);
    const [filteredUsersList, setFilteredUsersList] = useState([]);

    //==========UseEffect==========//
    useEffect(() => {
        let filtered = usersList.filter(user => user.displayName.toLowerCase() === props.inputSearch.toLowerCase())
        setFilteredUsersList(filtered);

    }, [props])


    // let usersArr = filteredUsersList.map(user =>
    //     <div>{user.desplayName}</div>
    // )
    return (

        filteredUsersList ? filteredUsersList.map(user =>
            <div key={user.email}>{user ? <AddFriends user={user} /> : 'No user Found...'}</div>
        ) : <div>False</div>
    )


}
