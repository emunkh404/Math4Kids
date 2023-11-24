import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function InfoNav() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar bg="light" expand="lg"> 
        <Container>
          <Navbar.Brand onClick={() => handleNavigate('/')}>Math4JEM</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" /> 
          <Navbar.Collapse id="navbarScroll"> 
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleNavigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavigate('/sign-up')}>Sign Up</Nav.Link>
              <Nav.Link onClick={() => handleNavigate('/flash-mul')}>FlashCard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
