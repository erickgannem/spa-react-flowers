import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <Row>
      <Col>

        <Spinner animation="border" variant="primary" />
      </Col>
    </Row>
  );
}

export default Loading;
