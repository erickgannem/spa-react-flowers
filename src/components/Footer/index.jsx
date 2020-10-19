import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCall, IoMdMailOpen } from 'react-icons/io';
import { FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import './index.css';

import { Container, Col, Row } from 'react-bootstrap';

import ContactForm from '../ContactForm';

function Footer({ config }) {
  const { phone, email, address } = config;

  return (
    <Container className="app-footer py-3" fluid>
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-md-start align-items-md-start mb-4" xs={12} md={4} lg={4}>
          <h4>Contáctanos</h4>
          <Row className="my-1">
            <Col>
              <IoIosCall className="mr-1" />
              {phone}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <IoMdMailOpen className="mr-1" />
              {email}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <FaMapMarkerAlt className="mr-1" />
              {address}
            </Col>
          </Row>

        </Col>
        <Col className="d-flex flex-column justify-content-md-start align-items-md-center mb-4" xs={12} md={4} lg={4}>
          <ContactForm />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-md-start align-items-md-end" xs={12} md={4} lg={4}>
          <h4>Horarios</h4>
          <span>
            Lunes a Viernes:
            {' '}
            <b>07:00 - 18:00</b>
          </span>
          <span>
            Sabado:
            {' '}
            <b>08:00 - 12:00</b>
          </span>
          <Row className="mt-4">
            <Col className="d-flex flex-column">
              <h4>Nuestras redes</h4>
              <div className="d-flex justify-content-center justify-content-md-end">
                <FaFacebookSquare size={32} />
                <FaTwitterSquare size={32} />

              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Footer.defaultProps = {
  config: PropTypes.shape({
    phone: 'Telefono',
    email: 'Email',
    address: 'Dirección',
  }),
};

Footer.propTypes = {
  config: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }),
};

export default Footer;
