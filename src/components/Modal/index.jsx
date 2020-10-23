import React from 'react';
import './index.css';

import {
  Modal as BootstrapModal, Button, Container, Row, Col, Image, Form,
} from 'react-bootstrap';
import FormSwitch from '../FormSwitch';
import Dropzone from '../Dropzone';

import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import checkAuthentication from '../../services/checkAuthentication';
import handleDropFiles from '../../services/handleDropFiles';
import updateArticle from '../../actions/updateArticle';

import ErrorContext from '../../context/ErrorContext';
import LoadingContext from '../../context/LoadingContext';

function Modal() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [, setSuccesfullyUpdated] = React.useState(false);
  const [droppedFile, setDroppedFile] = React.useState({});
  const { showModal, setShowModal } = React.useContext(ModalContext);
  const { selectedArticleState } = React.useContext(SelectedArticleContext);
  const {
    name, description, price, image, available,
  } = selectedArticleState;
  const { errorDispatch } = React.useContext(ErrorContext);
  const { loadingDispatch } = React.useContext(LoadingContext);

  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const descriptionInput = React.createRef();
  const switchInput = React.useRef();

  const handleOnDrop = (files) => {
    const formData = handleDropFiles(files);
    setDroppedFile(formData);
  };

  const handleArticleUpdate = (e) => {
    e.preventDefault();
    updateArticle({
      nameInput,
      priceInput,
      descriptionInput,
      switchInput,
      droppedFile,
    }, { errorDispatch, loadingDispatch }, { setIsEditing, setSuccesfullyUpdated }, { name });
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
          {
            isEditing ? 'Edición del producto' : 'Descripción del producto'
          }

        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {
          isEditing
            ? (
              <Form>
                <Form.Group>
                  <Dropzone onDrop={handleOnDrop} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nombre de la planta</Form.Label>
                  <Form.Control type="text" defaultValue={name} ref={nameInput} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="text" defaultValue={price} ref={priceInput} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="text" defaultValue={description} ref={descriptionInput} />
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
          isEditing && (<Button type="submit" variant="success" onClick={handleArticleUpdate}>Enviar Cambios</Button>)
        }
        <Button variant="danger" type="submit" onClick={() => { setIsEditing(false); setShowModal(false); }}>Cerrar</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
