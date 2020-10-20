import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import shopConfig from '../../shopConfig';
import './index.css';

function ContactForm() {
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
            <Form.Control type="email" placeholder="Email" disabled={!shopConfig.contact_endpoint} ref={emailInput} />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Nombre" disabled={!shopConfig.contact_endpoint} ref={nameInput} />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" placeholder="Comentario" disabled={!shopConfig.contact_endpoint} ref={commentInput} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitHandler} disabled={!shopConfig.contact_endpoint}>
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
