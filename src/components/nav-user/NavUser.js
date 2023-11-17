import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export default function NavUser() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Navbar bg="warning" expand="lg" >
      <Container fluid>
        {/* Logo on the left */}
        <Navbar.Brand href="#">
          <img
            src="/images/M4JEM.png" // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Existing Nav Links */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* ... your Nav.Link and NavDropdown items */}
          </Nav>

          {/* User and Password form on the right */}
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Username"
              className="me-2"
              aria-label="Username"
            />
            <FormControl
              type="password"
              placeholder="Password"
              className="me-2"
              aria-label="Password"
            />
            <Button onClick={() => handleNavigate("/login")} variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
