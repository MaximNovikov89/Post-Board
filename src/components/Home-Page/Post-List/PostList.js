import React, { useState } from 'react';
import PostCard from '../Post-Card/PostCard';
import { useSelector } from 'react-redux'


const List = () => {
    const [postList, setPostList] = useState([]);
    // const selector = useSelector();
    //<PostCard />, <PostCard />, <PostCard />, <PostCard />, <PostCard />
    return (
        <>
            <ul >
                {postList.map(listItem =>

                    <li className="list-group-item" style={{ display: 'inline-block', margin: '1rem' }}> {listItem} </li>

                )}

            </ul>
        </>
    );
};

export default List;