import React from "react";
// CSS Imports
import "../Styles/Nav.css";
// React Bootstrap Imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  navbarStyle: {
    background: "",
    justifyContent: "",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#About"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#Portfoilio"
              onClick={() => handlePageChange("Portfoilio")}
              className={
                currentPage === "Portfoilio" ? "nav-link active" : "nav-link"
              }
            >
              Portfoilio
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
