import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
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
    const [posts, setPosts] = useState([]);
    const user = useSelector(state => state.user);

    //==========useEffect=========//
    useEffect(() => {
        //  Fetching Data from firebase and updating component's state  //
        firebase
            .firestore()
            .doc(`users/${user.uid}`)
            .get()
            .then(function (doc) {

                if (doc.exists) {
                    let data = doc.data();
                    setPosts(data.posts);
                }
                else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }, [])


    //==========Methods=========//
    const handleInput = (element) => {
        setCurrentPost({
            ...currentPost,
            id: uuid(),
            [element.target.name]: element.target.value,
            photoURL: user.photoURL
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
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
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
                            placeholder='You say...' />

                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handlePost}>Post</Button>
                    <Button color="secondary" onClick={props.handleModal}> Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}

export default PostModal;