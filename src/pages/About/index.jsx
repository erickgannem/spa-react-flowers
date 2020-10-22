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
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const {
    videoId, description1, description2, description3, photo1, photo2,
  } = config.aboutPage;
  return (
    <Container fluid className="d-flex flex-column justify-content-start my-5">
      <Row className="video-section">
        <Col className="d-flex justify-content-center">
          <YouTube videoId={videoId} opts={opts} />
        </Col>
      </Row>
      <Row className="description-one-section">
        <Col xs={12}>
          <p>{description1}</p>
        </Col>
      </Row>
      <Row className="description-2-photo-section">
        <Col className="d-flex justify-content-center align-items-center">
          <p>{description2}</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <Image src={photo1} style={{ width: 200 }} />
        </Col>
      </Row>
      <Row className="description-3-photo-section">
        <Col className="d-flex justify-content-center">
          <Image src={photo2} style={{ width: 200 }} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <p>{description3}</p>
        </Col>
      </Row>
    </Container>

  );
}

export default About;
