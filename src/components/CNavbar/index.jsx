import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link, useLocation } from 'wouter';

import checkAuthentication from '../../services/checkAuthentication';

import AuthContext from '../../context/AuthContext';
import signOutUser from '../../actions/signOutUser';

function CNavbar(props) {
  const { bg, name } = props;
  const [location] = useLocation();
  const { authDispatch } = React.useContext(AuthContext);

  return (
    <>
      <Navbar bg={bg} style={{ justifyContent: 'space-between' }} expand="md">
        <Navbar.Brand as={Link} href="/">
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
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
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}
CNavbar.defaultProps = {
  bg: 'light',
  name: 'Tienda',
};
CNavbar.propTypes = {
  bg: PropTypes.string,
  name: PropTypes.string,
};
export default CNavbar;
