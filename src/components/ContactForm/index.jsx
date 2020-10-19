import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import './index.css';

function ContactForm() {
  const { REACT_APP_CONTACT_ENDPOINT } = process.env;
  const emailInput = React.createRef();
  const nameInput = React.createRef();
  const commentInput = React.createRef();

  const submitHandler = async (e, endpoint) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const name = nameInput.current.value;
    const comment = commentInput.current.value;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: {
          email,
          name,
          comment,
        },
      });
      return response;
    } catch (err) {
      return err;
    }
  };
  return (
    <Row>
      <Col>
        <Form className="p-5 d-flex flex-column app-contact-form">
          <Form.Group>
            <Form.Control type="email" placeholder="Email" disabled={!REACT_APP_CONTACT_ENDPOINT} ref={emailInput} />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Nombre" disabled={!REACT_APP_CONTACT_ENDPOINT} ref={nameInput} />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" placeholder="Comentario" disabled={!REACT_APP_CONTACT_ENDPOINT} ref={commentInput} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitHandler} disabled={!REACT_APP_CONTACT_ENDPOINT}>
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
