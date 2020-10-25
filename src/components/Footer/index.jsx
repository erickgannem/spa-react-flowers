import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCall, IoMdMailOpen } from 'react-icons/io';
import { FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import './index.css';

import { Container, Col, Row } from 'react-bootstrap';
import shopConfig from '../../shopConfig';

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
        <Col className="d-flex flex-column justify-content-md-start align-items-md-center mb-4" xs={12} md={4} lg={4} />
        <Col className="d-flex flex-column align-items-center justify-content-md-start align-items-md-end" xs={12} md={4} lg={4}>
          <h4>Horarios</h4>
          <span>
            {shopConfig.day1}
            {' '}
            a
            {' '}
            {shopConfig.day2}
            :
            {' '}
            <b>
              {shopConfig.hour1}
              {' '}
              -
              {' '}
              {shopConfig.hour2}
            </b>
          </span>
          <span>
            {shopConfig.day3}
            :
            {' '}
            <b>
              {shopConfig.hour3}
              {' '}
              -
              {' '}
              {shopConfig.hour4}
            </b>
          </span>
          <Row className="mt-4">
            <Col className="d-flex flex-column">
              <h4>Nuestras redes</h4>
              <div className="d-flex justify-content-center justify-content-md-end">
                <a className="footer-link" href={shopConfig.facebook_url}>
                  <FaFacebookSquare size={32} />
                </a>
                <a className="footer-link" href={shopConfig.twitter_url}>
                  <FaTwitterSquare size={32} />
                </a>

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
