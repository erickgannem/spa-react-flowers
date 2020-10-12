import React from 'react';

import {
  Button, Form, Row, Col, Alert, Spinner,
} from 'react-bootstrap';

import { useLocation } from 'wouter';
import AuthContext from '../../context/AuthContext';
import FeedbackContext from '../../context/LoadingContext';

import signInUser from '../../actions/signInUser';

import './index.css';

function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [, setLocation] = useLocation();

  const { authDispatch } = React.useContext(AuthContext);
  const { feedbackState, feedbackDispatch } = React.useContext(FeedbackContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser({ username, password }, { authDispatch, feedbackDispatch }, setLocation);
  };

  return (
    <Row noGutters className="justify-content-center align-items-center" style={{ marginTop: 60 }}>
      <Col lg="auto" sm="auto" xs="auto">
        {
          feedbackState.error.message && (
          <Alert variant="danger" className="text-center">
            {feedbackState.error.message}
          </Alert>
          )
        }

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
            <Button variant="success" type="submit">
              Entrar
              {' '}
              {feedbackState.isLoading && <Spinner as="span" animation="border" size="sm" role="status" />}
            </Button>
            <Form.Text className="text-center">¿Olvidó su contraseña?</Form.Text>

          </Form.Group>

        </Form>
      </Col>
    </Row>

  );
}

export default SignIn;
