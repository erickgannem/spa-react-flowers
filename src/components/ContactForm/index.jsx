import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import './index.css';

function ContactForm() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Text as="h4">
              Formulario de Contacto
            </Form.Text>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
