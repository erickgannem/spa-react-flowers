import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import './index.css';

function ContactForm() {
  return (
    <Container className="my-0">
      <Row>
        <Col>
          <Form>
            <Form.Text as="h4" className="mt-0 mb-3">
              Formulario de Contacto
            </Form.Text>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="textarea" placeholder="Comentario" />
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
