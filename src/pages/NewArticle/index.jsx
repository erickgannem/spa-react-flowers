import React from 'react';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';

import './index.css';

function NewArticle() {
  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const descriptionInput = React.createRef();

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Form className="p-5 d-flex flex-column app-new-article-form">
            <Form.Group>
              <Form.Label>Nombre de la planta</Form.Label>
              <Form.Control type="text" ref={nameInput} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" ref={priceInput} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" ref={descriptionInput} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>

  );
}

export default NewArticle;