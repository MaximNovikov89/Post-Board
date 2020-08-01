import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

const PostModal = (props) => {
    const {
        className
    } = props;

    const [modal] = useState(true);

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal isOpen={modal} toggle={props.handleModal} className={className}>

                <ModalHeader toggle={props.handleModal}>
                    <TextField id="standard-basic" label="Post Header" />
                </ModalHeader>


                <ModalBody>
                    <FormGroup >
                        <Input type="textarea" name="text" id="exampleText" style={{ height: '10rem' }} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={props.handleModal}>Post</Button>
                    <Button color="secondary" onClick={props.handleModal}> Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}

export default PostModal;