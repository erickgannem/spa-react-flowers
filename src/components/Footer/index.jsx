import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './index.css';

function Footer() {
  return (
    <Container className="app-footer py-4" fluid>
      <Row>
        <Col>
          <h4>Sobre nosotros</h4>
          <span>
            Contáctanos:
          </span>
          <br />
          <span>
            Encuentranos
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
