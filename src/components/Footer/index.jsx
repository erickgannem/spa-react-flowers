import React from 'react';
import './index.css';

import { Container, Col, Row } from 'react-bootstrap';

import ContactForm from '../ContactForm';

function Footer() {
  return (
    <Container className="app-footer py-4" fluid>
      <Row>
        <Col xs={6} md={6} lg={10}>
          <h4>Contáctanos</h4>
          <span>
            Telefono
          </span>
          <br />
          <span>
            Email
          </span>
          <br />
          <span>
            Dirección
          </span>
        </Col>
        <Col xs={6} md={6} lg={2}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
