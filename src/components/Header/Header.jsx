import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to='/' className='navbar-brand'>MCN</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/user' className='nav-link'>User</NavLink>
            <NavLink to='/admin' className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
          <NavDropdown title="Setting" id="basic-nav-dropdown">
            <NavDropdown.Item>Login</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;