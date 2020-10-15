import React from 'react';
import {
  Row, Col, Spinner,
} from 'react-bootstrap';
import './index.css';

function Loading() {
  return (
    <Row>
      <Col className="py-5">
        <Spinner animation="border" variant="primary" />
      </Col>
    </Row>

  );
}

export default Loading;
