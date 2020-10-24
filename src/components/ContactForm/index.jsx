// TODO: Split this comment input into a different component to avoid unecessary re-renders}

import React from 'react';
import './index.css';

import {
  Row, Col, Form, Button, Spinner, Alert,
} from 'react-bootstrap';

import * as EmailValidator from 'email-validator';
import shopConfig from '../../shopConfig';
import LoadingContext from '../../context/LoadingContext';
import ErrorContext from '../../context/ErrorContext';

function ContactForm() {
  const MAX_LENGTH = 120;
  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);
  const { errorState, errorDispatch } = React.useContext(ErrorContext);
  const [succesfullySubmited, setSuccesfullySubmitted] = React.useState(false);

  const [charsLeft, setCharsLeft] = React.useState(MAX_LENGTH);
  const emailInput = React.createRef();
  const nameInput = React.createRef();
  const messageInput = React.createRef();

  const ipifyUrl = 'https://api.ipify.org/?format=json';

  React.useEffect(() => {
    errorDispatch('UNSET_ERROR');
  }, [errorDispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      errorDispatch({ type: 'UNSET_ERROR' });
      loadingDispatch({ type: 'SET_LOADING' });
      const body = {
        email: emailInput.current.value,
        name: nameInput.current.value,
        message: messageInput.current.value,
        address: null,
      };

      const ipifyRequest = await fetch(ipifyUrl);
      const data = await ipifyRequest.json();
      const { ip } = data;
      body.address = ip;

      if (body.email === '') throw new Error('El campo e-mail no puede estar vacio');
      if (!EmailValidator.validate(body.email)) throw new Error('Indique un e-mail valido');
      if (body.name === '') throw new Error('El campo nombre no puede estar vacio');
      if (body.message === '') throw new Error('El campo de mensaje no puede estar vacio');

      await fetch(shopConfig.contact_endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
      });

      setSuccesfullySubmitted(true);
      loadingDispatch({ type: 'UNSET_LOADING' });
    } catch (err) {
      errorDispatch({
        type: 'SET_ERROR',
        payload: {
          error: { contactForm: { message: err.message } },
        },
      });
      loadingDispatch({ type: 'UNSET_LOADING' });
    }
  };
  return (
    <Row>
      <Col>
        {
          (errorState.error && errorState.error.contactForm) && (
          <Alert variant="danger" className="text-center">
            {errorState.error.contactForm.message}
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
            <Form.Control as="input" type="email" placeholder="Email" disabled={!shopConfig.contact_endpoint} ref={emailInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Nombre" disabled={!shopConfig.contact_endpoint} ref={nameInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" maxLength={MAX_LENGTH} placeholder="Mensaje" disabled={!shopConfig.contact_endpoint} ref={messageInput} onChange={(e) => setCharsLeft(MAX_LENGTH - e.target.value.length)} required />
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
