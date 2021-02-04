import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegisterForm from '../RegisterForm';

const RegisterModal = (props) => {
  const {
    buttonLabel,
    updateList
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg" backdrop={true} keyboard={true}>
        <ModalHeader toggle={toggle}>Register Employee</ModalHeader>
        <ModalBody>
          <RegisterForm closeModal={toggle} updateList={updateList} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterModal;
