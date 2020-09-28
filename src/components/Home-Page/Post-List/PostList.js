import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from './Post-Card/PostCard';




const List = () => {
    //==========States=========//
    const user = useSelector(state => state.currentUser.currentUser);
    const posts = useSelector(state => state.posts.posts);



    const sortedPosts = posts.sort((a, b) => (a.exactTime > b.exactTime) ? -1 : 1);

    return (
        <div>
            {sortedPosts.map(post =>
                <PostCard key={post.id} post={post} user={user} />
            )}
        </div>
    )
};
export default List;