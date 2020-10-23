// TODO: Split this comment input into a different component to avoid unecessary re-renders}

import React from 'react';
import './index.css';

import {
  Row, Col, Form, Button, Spinner, Alert,
} from 'react-bootstrap';

import shopConfig from '../../shopConfig';
import LoadingContext from '../../context/LoadingContext';
import ErrorContext from '../../context/ErrorContext';

function ContactForm() {
  const MAX_LENGTH = 200;
  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);
  const { errorState, errorDispatch } = React.useContext(ErrorContext);
  const [succesfullySubmited, setSuccesfullySubmitted] = React.useState(false);

  const [charsLeft, setCharsLeft] = React.useState(MAX_LENGTH);
  const emailInput = React.createRef();
  const nameInput = React.createRef();
  const commentInput = React.createRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      errorDispatch({ type: 'UNSET_ERROR' });
      loadingDispatch({ type: 'SET_LOADING' });
      const body = {
        email: emailInput.current.value,
        name: nameInput.current.value,
        comment: commentInput.current.value,
      };
      if (body.name === '' || body.description === '' || body.price === '') {
        throw new Error('All fields must be filled');
      }
      await fetch(shopConfig.contact_endpoint, {
        method: 'POST',
        body,
      });
      setSuccesfullySubmitted(true);
      loadingDispatch({ type: 'UNSET_LOADING' });
    } catch (err) {
      errorDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
      loadingDispatch({ type: 'UNSET_LOADING' });
    }
  };
  return (
    <Row>
      <Col>
        {
          errorState.error.message && (
          <Alert variant="danger" className="text-center">
            {errorState.error.message}
          </Alert>
          )
        }
        {
          succesfullySubmited && (
          <Alert variant="success" className="text-center">
            Gracias por entrar en contacto con nosotros!
          </Alert>
          )
        }
        <Form className="p-5 d-flex flex-column app-contact-form">

          <Form.Group>
            <Form.Control type="email" placeholder="Email" disabled={!shopConfig.contact_endpoint} ref={emailInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Nombre" disabled={!shopConfig.contact_endpoint} ref={nameInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" maxLength={MAX_LENGTH} placeholder="Comentario" disabled={!shopConfig.contact_endpoint} ref={commentInput} onChange={(e) => setCharsLeft(MAX_LENGTH - e.target.value.length)} required />
            <small>
              {charsLeft}
            </small>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitHandler} disabled={!shopConfig.contact_endpoint}>
            Enviar
            {' '}
            {loadingState.isLoading && <Spinner as="span" animation="border" size="sm" role="status" />}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
