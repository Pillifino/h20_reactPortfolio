// CSS Imports
import React from 'react';
import '../Styles/Nav.css';
// React Bootstrap Imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  navbarStyle: {
    background: '',
    justifyContent: '',
  },
};

function Header({handleClick}) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick} href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
