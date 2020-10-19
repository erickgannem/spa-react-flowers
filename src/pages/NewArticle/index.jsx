import React from 'react';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';

function NewArticle() {
  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const descriptionInput = React.createRef();

  return (
    <Form>
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
  );
}

export default NewArticle;
