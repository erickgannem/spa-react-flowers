import React from 'react';
import './index.css';

import {
  Container, Image, Row, Col,
} from 'react-bootstrap';

import YouTube from 'react-youtube';

import config from '../../shopConfig';

function About() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const {
    videoId, description1, description2, description3, photo1, photo2,
  } = config.aboutPage;
  return (
    <Container fluid className="d-flex flex-column justify-content-start my-5 paddingx-5">
      <Row className="video-section">
        <Col className="embed-responsive embed-responsive-4by3">
          <YouTube videoId={videoId} opts={opts} className="embed-responsive-item" />
        </Col>
      </Row>
      <Row className="description-one-section my-5">
        <Col xs={12}>
          <p className="description">{description1}</p>
        </Col>
      </Row>
      <Row className="description-2-photo-section">
        <Col className="d-flex justify-content-center align-items-start my-3" lg={10}>
          <p className="description">{description2}</p>
        </Col>
        <Col className="d-flex justify-content-center justify-content-lg-end my-3" lg={2}>
          <Image fluid src={photo1} />
        </Col>
      </Row>
      <Row className="description-3-photo-section my-5">
        <Col className="d-flex justify-content-center justify-content-lg-start my-2" lg={2}>
          <Image fluid src={photo2} />
        </Col>
        <Col className="d-flex justify-content-center align-items-start my-3" lg={10}>
          <p className="description">{description3}</p>
        </Col>
      </Row>
    </Container>

  );
}

export default About;
