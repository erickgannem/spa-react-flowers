import React from 'react';
import {
  Modal as BootstrapModal, Button, Container, Row, Col, Image,
} from 'react-bootstrap';

import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import './index.css';

function Modal() {
  const { showModal, setShowModal } = React.useContext(ModalContext);
  const { selectedArticleState } = React.useContext(SelectedArticleContext);
  const {
    name, description, price, image,
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
        <BootstrapModal.Title>
          Descripción del producto
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Container fluid>
          <Row>
            <Col className="justify-content-center p-0" xs={12} md={4}>
              <Image src={image} style={{ width: '100%' }} />
            </Col>
            <Col className="justify-content-center mt-3 mt-md-0 pl-md-5" xs={12} md={8}>
              <Row>
                <Col>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <h3>
                    Bs.
                    {' '}
                    {price}
                  </h3>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button onClick={() => setShowModal(false)}>Cerrar</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
