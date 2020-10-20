import React from 'react';
import {
  Modal as BootstrapModal, Button, Container, Row, Col, Image, Form,
} from 'react-bootstrap';
import FormSwitch from '../FormSwitch';

import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import checkAuthentication from '../../services/checkAuthentication';

import './index.css';

function Modal() {
  const [isEditing, setIsEditing] = React.useState(false);
  const { showModal, setShowModal } = React.useContext(ModalContext);
  const { selectedArticleState } = React.useContext(SelectedArticleContext);
  const {
    name, description, price, image, available,
  } = selectedArticleState;

  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const descriptionInput = React.createRef();
  const switchInput = React.useRef();

  // refactor ref as state
  const handleSubmit = (e) => {
    const dataToSubmit = {
      name: nameInput.current.value || name,
      priceInput: priceInput.current.value || price,
      description: descriptionInput.current.value || description,
      available: switchInput.current.value,
    };
    e.preventDefault();
    setIsEditing(false);
  };

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
        {
          isEditing
            ? (
              <Form>
                <Form.Group>
                  <Form.Label>Nombre de la planta</Form.Label>
                  <Form.Control type="text" placeholder={`Actual: ${name}`} ref={nameInput} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="text" placeholder={`Actual: ${price}`} ref={priceInput} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="text" placeholder={`Actual: ${description}`} ref={descriptionInput} />
                </Form.Group>
                <FormSwitch available={available} ref={switchInput} />
              </Form>
            )
            : (
              <Container fluid>
                <Row>
                  <Col className="justify-content-center p-0" xs={12} md={4}>
                    <Image src={image} />
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
            )
        }

      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        {
          checkAuthentication() && !isEditing
          && (<Button variant="primary" onClick={() => setIsEditing(true)}>Editar</Button>)
        }
        {
          isEditing && (<Button variant="success" onClick={handleSubmit}>Enviar Cambios</Button>)
        }
        <Button variant="danger" type="submit" onClick={() => { setIsEditing(false); setShowModal(false); }}>Cerrar</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
