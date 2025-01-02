import React from "react";
import "./Header.css"; // Custom styles for the header
import { Navbar, Nav, Button } from "react-bootstrap"; // Bootstrap components

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand href="#" className="brand">
          <img src="/logo.png" alt="French Learning Logo" className="logo" />{" "}
          French Learning App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#syllables">Syllables</Nav.Link>
            <Nav.Link href="#tests">Tests</Nav.Link>
            <Nav.Link href="#progress">Progress</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <div className="header-buttons">
            <Button variant="outline-primary" className="me-2">
              Register
            </Button>
            <Button variant="primary">Sign In</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
