import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import EditForm from '../EditForm';
import { FiEdit } from 'react-icons/fi';

const EditModal = (props) => {
  const {
    employee
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}><FiEdit /></Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg" backdrop={true} keyboard={true}>
        <ModalHeader toggle={toggle}>Edit Employee info</ModalHeader>
        <ModalBody>
          <EditForm closeModal={toggle} employee={employee} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditModal;
