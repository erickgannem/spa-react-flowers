import React from 'react';

import {
  Container, Button, Form, Row, Col, Alert, Spinner,
} from 'react-bootstrap';

import { useLocation } from 'wouter';
import AuthContext from '../../context/AuthContext';
import LoadingContext from '../../context/LoadingContext';
import ErrorContext from '../../context/ErrorContext';

import signInUser from '../../actions/signInUser';

import './index.css';

function SignIn() {
  const usernameInput = React.createRef();
  const passwordInput = React.createRef();

  const [, setLocation] = useLocation();

  const { authDispatch } = React.useContext(AuthContext);
  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);
  const { errorState, errorDispatch } = React.useContext(ErrorContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    await signInUser({ username, password },
      { authDispatch, loadingDispatch, errorDispatch }, { errorState }, setLocation);
  };

  return (
    <Container>
      <Row noGutters className="justify-content-center h-100">
        <Col lg="auto" sm="auto" xs="auto">
          {
            errorState.error.message && (
            <Alert variant="danger" className="text-center">
              {errorState.error.message}
            </Alert>
            )
          }

          <Form className="my-5" onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" size="lg" ref={usernameInput} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" size="lg" ref={passwordInput} />
            </Form.Group>
            <Form.Group controlId="controls" className="d-flex flex-column">
              <Button variant="success" type="submit">
                Entrar
                {' '}
                {loadingState.isLoading && <Spinner as="span" animation="border" size="sm" role="status" />}
              </Button>
              <Form.Text className="text-center">¿Olvidó su contraseña?</Form.Text>

            </Form.Group>

          </Form>
        </Col>
      </Row>
    </Container>

  );
}

export default SignIn;
