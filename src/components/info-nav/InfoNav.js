import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './InfoNav.css'; // Import your custom CSS

export default function InfoNav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setShow(false); // Close offcanvas after navigation
  };

  const toggleOffcanvas = () => setShow(!show);

  return (
    <>
       <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => handleNavigate('/')}>Math4JEM</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleOffcanvas}>
            🍕
          </Navbar.Toggle>
          <Offcanvas show={show} onHide={toggleOffcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto flex-column">
                <Nav.Link onClick={() => handleNavigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => handleNavigate('/sign-up')}>Sign Up</Nav.Link>
                <Nav.Link onClick={() => handleNavigate('/flash-mul')}>FlashCard</Nav.Link>
                <Nav.Link onClick={() => handleNavigate('/states')}>Statistics</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
