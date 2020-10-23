import React from 'react';
import {
  Container, Row, Col, Form, Button, Alert, Spinner,
} from 'react-bootstrap';
import Dropzone from '../../components/Dropzone';
import FormSwitch from '../../components/FormSwitch';
import LoadingContext from '../../context/LoadingContext';
import ErrorContext from '../../context/ErrorContext';

import './index.css';

function NewArticle() {
  const [succesfullyAdded, setSuccesfullyAdded] = React.useState(false);
  const [droppedFile, setDroppedFile] = React.useState({});
  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const descriptionInput = React.createRef();
  const switchInput = React.createRef();

  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);
  const { errorState, errorDispatch } = React.useContext(ErrorContext);

  const handleOnDrop = (files) => {
    const formData = new FormData();
    const file = files[0];
    formData.append('file', file);
    setDroppedFile(formData);
  };

  const handleSubmitNewArticle = async (e) => {
    e.preventDefault();
    errorDispatch({ type: 'UNSET_ERROR' });

    try {
      loadingDispatch({ type: 'SET_LOADING' });
      const body = {
        name: nameInput.current.value,
        active: switchInput.current.checked ? 'on' : 'off',
        description: descriptionInput.current.value,
        price: priceInput.current.value,
        image: droppedFile,
      };

      if (body.name === '' || body.description === '' || body.price === '' || !(body.image instanceof FormData)) {
        throw new Error('All fields must be filled');
      }

      const response = await fetch('http://lapalabra.free.fr/api/articles/', {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
        }),
        body,
      });
      setSuccesfullyAdded(true);
      loadingDispatch({ type: 'UNSET_LOADING' });
    } catch (err) {
      errorDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
      loadingDispatch({ type: 'UNSET_LOADING' });
    }
  };
  return (
    <Container className="my-5 h-100">
      <h4 className="text-center m-0">Anadir Producto</h4>
      <hr className="app-separator my-3" />
      {
        errorState.error.message && (
        <Alert variant="danger" className="text-center">
          {errorState.error.message}
        </Alert>
        )
      }
      {
        succesfullyAdded && (
        <Alert variant="success" className="text-center">
          Article has been added succesfully!
        </Alert>
        )
      }
      <Col className="p-0">
        <Dropzone onDrop={handleOnDrop} />
      </Col>
      <Row>
        <Col>
          <Form className="p-5 d-flex flex-column app-new-article-form">
            <Form.Group>
              <Form.Label>Nombre de la planta</Form.Label>
              <Form.Control type="text" ref={nameInput} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" ref={priceInput} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" ref={descriptionInput} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Disponibilidad</Form.Label>
              <FormSwitch ref={switchInput} />
            </Form.Group>
            <Form.Group>
              <Button variant="success" type="submit" onClick={handleSubmitNewArticle}>
                Enviar
                {' '}
                {loadingState.isLoading && <Spinner as="span" animation="border" size="sm" role="status" />}
              </Button>

            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>

  );
}

export default NewArticle;
