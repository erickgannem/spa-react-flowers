import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import './index.css';

function ContactForm() {
  const { REACT_APP_CONTACT_ENDPOINT } = process.env;
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [comment, setComment] = React.useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('endpoint', {
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
    <Container className="my-0">
      <Row>
        <Col>
          <Form>
            <Form.Text as="h4" className="mt-0 mb-3 text-center">
              Formulario de Contacto
            </Form.Text>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" disabled={!REACT_APP_CONTACT_ENDPOINT} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Nombre" disabled={!REACT_APP_CONTACT_ENDPOINT} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Control as="textarea" placeholder="Comentario" disabled={!REACT_APP_CONTACT_ENDPOINT} onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandler}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
