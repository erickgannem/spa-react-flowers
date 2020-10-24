import React from 'react';
import {
  Container, Row, Col, Form, Button, Alert, Spinner,
} from 'react-bootstrap';
import Dropzone from '../../components/Dropzone';
import FormSwitch from '../../components/FormSwitch';
import LoadingContext from '../../context/LoadingContext';
import ErrorContext from '../../context/ErrorContext';

import submitNewArticle from '../../actions/submitNewArticle';
import handleDropFiles from '../../services/handleDropFiles';

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

  React.useEffect(() => {
    errorDispatch({ type: 'UNSET_ERROR' });
  }, [errorDispatch]);

  const handleOnDrop = (files) => {
    const formData = handleDropFiles(files);
    setDroppedFile(formData);
  };

  const handleSubmitNewArticle = async (e) => {
    e.preventDefault();

    errorDispatch({ type: 'UNSET_ERROR' });
    submitNewArticle({
      nameInput,
      switchInput,
      descriptionInput,
      priceInput,
      droppedFile,
    }, { errorDispatch, loadingDispatch }, { setSuccesfullyAdded });
  };
  return (
    <Container className="my-5">
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
