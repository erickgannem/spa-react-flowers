import React from 'react';
import PropTypes from 'prop-types';

import {
  Navbar as BootstrapNavbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import { Link } from 'wouter';

import AuthContext from '../../context/AuthContext';
import signOutUser from '../../actions/signOutUser';
import checkAuthentication from '../../services/checkAuthentication';

import './index.css';

function Navbar(props) {
  const { name } = props;
  const { authState, authDispatch } = React.useContext(AuthContext);

  return (
    <>
      <BootstrapNavbar variant="dark" bg="dark" className="app-navbar" expand="md">
        <BootstrapNavbar.Brand as={Link} href="/" className="app-brand">
          {name}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Nav>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/ofertas">
                Ofertas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/macetas">
                Macetas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/accesorios">
                Accesorios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/herramientas">Herramientas</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/acerca">
                Acerca
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              {
                !checkAuthentication()
                  ? (
                    <Button variant="primary" as={Link} href="/entrar">
                      Entrar
                    </Button>
                  )
                  : (
                    <Button variant="danger" as={Link} href="/" onClick={() => signOutUser(authDispatch)}>
                      Salir
                    </Button>
                  )
              }
            </Nav.Item>

          </Nav>
        </BootstrapNavbar.Collapse>
        {
          authState.isAuthenticated && (
            <Container
              fluid
              className="bg-info h-30 w-100 px-3 py-1"
              style={{
                position: 'absolute', bottom: -25, left: 0, color: '#113d45', fontWeight: 'bolder',
              }}
            >
              <Row>
                <Col>
                  <p className="m-0 p-0">Logado como administrador</p>
                </Col>
              </Row>
            </Container>
          )
        }

      </BootstrapNavbar>

    </>
  );
}
Navbar.defaultProps = {
  name: 'Tienda',
};
Navbar.propTypes = {
  name: PropTypes.string,
};
export default Navbar;
