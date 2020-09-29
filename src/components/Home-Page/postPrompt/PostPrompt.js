import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import firebase from "firebase/app";

const PostModal = (props) => {
    const {
        className
    } = props;
    //==========States=========//
    const [modal] = useState(true);
    const [currentPost, setCurrentPost] = useState({});
    const posts = useSelector((state) => state.posts.posts);
    const user = useSelector(state => state.currentUser.currentUser);

    //==========Methods=========//
    const handleInput = (element) => {
        let fullDate = new Date();
        let currentDate = new Date(fullDate).toLocaleDateString('en-GB');
        let currentTime = new Date(fullDate).toLocaleTimeString(['en-GB'], { timeStyle: 'short' });
        setCurrentPost({
            ...currentPost,
            [element.target.name]: element.target.value,
            photoURL: user.photoURL,
            createdAt: {
                date: currentDate,
                time: currentTime,
            },
            exactTime: currentDate + ' ' + currentTime,
            likes: 0,
            liked: []

        })
    }
    //post to database//
    const handlePost = () => {

        const docRef = firebase.firestore().doc(`users/${user.uid}`);
        const globalPosts = firebase.firestore().collection('globalPosts');

        //Accessing specific user document, Adding post to user document. 
        docRef
            .get()
            .then(
                function (doc) {
                    let data = doc.data();
                    if (data.posts) {

                        let updatedPosts = posts;
                        updatedPosts.push(currentPost);

                        docRef.update({
                            posts: updatedPosts
                        })
                        globalPosts.add({ author: `${user.displayName}`, ...currentPost })
                    }
                    else {
                        docRef.update({
                            posts: [currentPost]
                        })
                        globalPosts.add({ author: `${user.displayName}`, ...currentPost })
                    }
                }
            );
        props.handleModal();
    }
    return (
        <>
            <Modal isOpen={modal} toggle={props.handleModal} className={className}>

                <ModalHeader toggle={props.handleModal}>
                    <TextField
                        id="standard-basic"
                        label="Post Header"
                        name="header"
                        onChange={handleInput} />
                </ModalHeader>


                <ModalBody>
                    <FormGroup >
                        <Input
                            style={{ height: '10rem' }}
                            type="textarea"
                            id="exampleText"
                            name="content"
                            onChange={handleInput}
                            maxLength={200}
                            placeholder="What's on your mind..." />

                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Upload Your Photo here"
                            name="postImageURL"
                            style={{ width: '100%' }}
                            onChange={handleInput} />
                    </FormGroup>
                </ModalBody>


                {/* <TextField
                    id="standard-basic"
                    label="Add picture..."
                    name="header"
                    disabled />
                <UploadImage singleImage addPicture={addPicture} /> */}
                <ModalFooter>
                    <Button color="primary" onClick={handlePost}>Post</Button>
                    <Button color="secondary" onClick={props.handleModal}> Cancel</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}

export default PostModal;