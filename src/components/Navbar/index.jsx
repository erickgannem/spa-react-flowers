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

import { Link, useLocation } from 'wouter';

import { FaPlus } from 'react-icons/fa';

import AuthContext from '../../context/AuthContext';
import signOutUser from '../../actions/signOutUser';
import checkAuthentication from '../../services/checkAuthentication';

import './index.css';

function Navbar(props) {
  const [, setLocation] = useLocation();
  const { name } = props;
  const { authDispatch } = React.useContext(AuthContext);

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
              <Nav.Link className="nav-link" as={Link} href="/catalogo">
                Catalogo
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/macetas">
                Macetas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/accesorios">
                Accesorios
              </Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/herramientas">Herramientas</Nav.Link>
            </Nav.Item> */}
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/acerca">
                Acerca
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/contactanos">
                Contáctanos
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
          checkAuthentication() && (
            <Container
              fluid
              className="h-30 px-3 py-1"
              style={{
                position: 'absolute', bottom: -31, left: 0, color: '#113d45', fontWeight: 'bolder', backgroundColor: '#515A63',
              }}
            >
              <Row className="w-100 d-flex flex-row justify-content-between ">
                <Col>
                  <Button variant="success" className="d-flex justify-content-center align-items-center m-0" onClick={() => setLocation('/nuevo')}>
                    <FaPlus />
                    <small className="text-white ml-1">Anadir Producto</small>
                  </Button>
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
