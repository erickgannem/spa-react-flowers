import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUserData = async (payload) => {
    const init = {
      method: 'POST',
      body: JSON.stringify(payload),
    };
    try {
      const response = await fetch('http://lapalabra.free.fr/api/login_check/', init);
      const data = await response.json();
      return data.token;
    } catch (error) {
      return error;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData({ username, password });
  };

  return (
    <Row noGutters className="justify-content-center align-items-center" style={{ marginTop: 60 }}>
      <Col lg="auto" sm="auto" xs="auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" size="lg" onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" size="lg" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="controls" className="d-flex flex-column">
            <Button variant="success" type="submit">Entrar</Button>
            <Form.Text className="text-center">¿Olvidó su contraseña?</Form.Text>

          </Form.Group>

        </Form>
      </Col>
    </Row>

  );
}

export default LoginPage;
