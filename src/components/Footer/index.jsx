import React from 'react';
import { IoIosCall, IoMdMailOpen } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';

import './index.css';

import { Container, Col, Row } from 'react-bootstrap';

import ContactForm from '../ContactForm';

function Footer() {
  return (
    <Container className="app-footer py-3" fluid>
      <Row>
        <Col xs={12} md={6} lg={4} className="justify-content-center align-items-center">
          <h4 className="mt-0 mb-3">Contáctanos</h4>
          <Row className="my-1">
            <Col>
              <IoIosCall className="mr-1" />
              Telefono
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <IoMdMailOpen className="mr-1" />
              Email
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <FaMapMarkerAlt className="mr-1" />
              Dirección
            </Col>
          </Row>

        </Col>
        <Col xs={12} md={6} lg={3} className="justify-content-center align-items-center px-0">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
