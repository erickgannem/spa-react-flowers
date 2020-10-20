import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';

function Contact() {
  return (
    <Container fluid className="h-100 d-flex flex-column justify-content-center my-5">
      <Row>
        <Col xs={12} md={6} className="m-auto">
          <h4 className="m-0 p-0 text-center">
            Contáctanos
          </h4>
          <hr className="app-separator my-3" />
          <p className="text-center">Tu opinión es importante. Contáctanos via e-mail a través del formulario abajo</p>
          <ContactForm />
        </Col>
      </Row>
    </Container>

  );
}

export default Contact;
