import React from 'react';
import './ProfileCard.scss';


export default function ProfileCard(props) {

    const handleOpenModal = () => {
        props.handleModal();
    }
    return (

        <div>
            <div className="card">
                <img src={props.avatarUrl} alt="avatar" className="card__image" />
                <p className="card__name">{props.userName}</p>
                <ul className='cardList'>
                    <li>Button</li>
                    <li>Button</li>
                    <li>Button</li>

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
