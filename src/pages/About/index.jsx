import React from 'react';
import './index.css';

import { Container, Jumbotron } from 'react-bootstrap';

import config from '../../shopConfig';

function About() {
  const { about } = config;
  return (
    <Container fluid className="d-flex flex-column justify-content-start h-100 my-5">
      <Jumbotron as="div" className="app-jumbotron">
        <h3>El Jardin de Mamá</h3>
        <hr className="app-separator m-0 my-3" />
        <p>
          {about}
        </p>
      </Jumbotron>
    </Container>

  );
}

export default About;
