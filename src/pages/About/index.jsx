import React from 'react';
import './index.css';

import {
  Container, Image, Row, Col,
} from 'react-bootstrap';
import VideoPlayer from '../../components/VideoPlayer';

import config from '../../shopConfig';

function About() {
  const {
    videoUrl, description1, description2, description3, photo1, photo2,
  } = config.aboutPage;
  return (
    <Container fluid className="d-flex flex-column justify-content-start h-100 my-5">
      <Row className="video-section">
        <Col xs={12} className="d-flex justify-content-center">
          <h1>Video WIP</h1>
          {/* <VideoPlayer videoUrl={videoUrl} /> */}
        </Col>
      </Row>
      <Row className="description-one-section">
        <Col xs={12}>
          <p>{description1}</p>
        </Col>
      </Row>
      <Row className="description-2-photo-section">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <p>{description2}</p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image src={photo1} style={{ width: 200 }} />
        </Col>
      </Row>
      <Row className="description-3-photo-section">
        <Col md={6} className="d-flex justify-content-center">
          <Image src={photo2} style={{ width: 200 }} />
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <p>{description3}</p>
        </Col>
      </Row>
    </Container>

  );
}

export default About;
