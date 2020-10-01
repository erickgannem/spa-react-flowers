import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function CNavbar(props) {
  const { bg } = props;
  return (
    <Navbar bg={bg} style={{ justifyContent: 'space-between' }} expand="md">
      <Navbar.Brand href="#home">FlowersSPA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Nav>
          <Nav.Item className="p-2">
            <Nav.Link className="nav-link" href="#">Features</Nav.Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Nav.Link className="nav-link" href="#">Enterprise</Nav.Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Nav.Link className="nav-link" href="#">Support</Nav.Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Nav.Link className="nav-link" href="#">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Button variant="outline-primary">Sign up</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}
CNavbar.defaultProps = {
  bg: 'light',
};
CNavbar.propTypes = {
  bg: PropTypes.string,
};
export default CNavbar;
