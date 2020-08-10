import React from 'react';
import './ProfileCard.scss';
import * as actions from '../../../Actions/actions';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';




export default function ProfileCard(props) {
    const dispatch = useDispatch();


    const handleOpenModal = () => {
        props.handleModal();
    }
    const handlePostType = (element) => {
        const val = element.target.value;
        console.log(element.target.value);
        dispatch({ type: actions.SET_POST_LIST_TYPE, value: val });
    }

    return (

        <div>
            <div className="profileCard">
                <img src={props.avatarUrl} alt="avatar" className="profileCard__image" />
                <p className="card__name">{props.userName}</p>
                <ul className='cardList'>
                    <button value='global' onClick={handlePostType}>Global Posts</button>
                    <button value='users' onClick={handlePostType}>My Posts</button>
                </ul>
                <div className="grid-container">
                    <div className="grid-child-posts">
                        0 Post
                    </div>

                    <div className="grid-child-followers">
                        0 Friends
                     </div>
                </div>
                <div>
                    <button xs='2' className="profileBtn draw-border" onClick={handleOpenModal}>Post</button>
                    <button xs='2' className="profileBtn draw-border">Upload</button>
                </div>

            </div>


        </div>


    )
}
