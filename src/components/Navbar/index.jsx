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

import AuthContext from '../../context/AuthContext';
import signOutUser from '../../actions/signOutUser';
import checkAuthentication from '../../services/checkAuthentication';

import './index.css';

function Navbar(props) {
  const { name } = props;
  const [location] = useLocation();
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
                location === '/panel' ? (
                  <Button variant="danger" as={Link} href="/entrar" onClick={() => signOutUser(authDispatch)}>
                    Cerrar Sesión
                  </Button>
                ) : (
                  <Button variant={checkAuthentication() ? 'success' : 'primary'} as={Link} href={checkAuthentication() ? '/panel' : '/entrar'}>
                    {checkAuthentication() ? 'Ir al Panel' : 'Entrar'}
                  </Button>
                )
              }

            </Nav.Item>

          </Nav>
        </BootstrapNavbar.Collapse>
        <div className="bg-success h-30 w-100" style={{ position: 'absolute', bottom: -23, left: 0 }}>
          barra
        </div>
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
