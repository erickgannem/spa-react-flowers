import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import './index.css';

function Modal() {
  const { showModal, setShowModal } = React.useContext(ModalContext);
  const { selectedArticleState } = React.useContext(SelectedArticleContext);
  const {
    name, description, price, image, available,
  } = selectedArticleState;
  return (
    <BootstrapModal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <BootstrapModal.Header>
        <BootstrapModal.Title id="contained-modal-title-vcenter">
          {name}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>

        <p>
          {description}
        </p>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button onClick={() => setShowModal(false)}>Cerrar</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
