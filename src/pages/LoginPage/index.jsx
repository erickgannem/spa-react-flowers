import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'wouter';
import AuthContext from '../../context/AuthContext';
import FeedbackContext from '../../context/FeedbackContext';

import './index.css';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [, setLocation] = useLocation();

  const authContext = React.useContext(AuthContext);
  const feedbackContext = React.useContext(FeedbackContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      feedbackContext.feedbackDispatch({ type: 'SET_LOADING' });
      const response = await fetch('http://lapalabra.free.fr/api/login_check/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      const { data } = await response.json();
      const { token, json_payload: jsonPayload } = data;

      if (jsonPayload.username) {
        if (token) {
          localStorage.setItem('@jdm_user_token', token);
          localStorage.setItem('@jdm_current_user', JSON.stringify({ username: jsonPayload.username }));
          authContext.authDispatch({
            type: 'SIGN_IN',
            payload: {
              user: { username: jsonPayload.username },
              token,
            },
          });
          feedbackContext.feedbackDispatch({ type: 'UNSET_LOADING' });
          setLocation('/panel');
        } else {
          feedbackContext.feedbackDispatch({ type: 'UNSET_LOADING' });
          throw new Error('Username or password incorrect');
        }
      } else {
        feedbackContext.feedbackDispatch({ type: 'UNSET_LOADING' });
        throw new Error('Username field cannot be empty');
      }
    } catch (err) {
      feedbackContext.feedbackDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
    }
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
