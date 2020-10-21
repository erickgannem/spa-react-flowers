import React from 'react';
import './index.css';

import {
  Container, Image, Row, Col,
} from 'react-bootstrap';
import VideoPlayer from '../../components/VideoPlayer';

import config from '../../shopConfig';

function About() {
  const {
    description1, description2, description3,
  } = config;
  return (
    <Container fluid className="d-flex flex-column justify-content-start h-100 my-5">
      <Row className="video-section">
        <Col>
          <VideoPlayer />
        </Col>
      </Row>
      <Row className="description-one-section">
        <Col>
          <p>{description1}</p>
        </Col>
      </Row>
      <Row className="description-2-photo-section">
        <Col>
          <p>{description2}</p>
        </Col>
        <Image />
      </Row>
      <Row className="description-3-photo-section">
        <Image />
        <Col>
          <p>{description3}</p>
        </Col>
      </Row>
    </Container>

  );
}

export default About;
