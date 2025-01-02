import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap"; // Bootstrap components
import { Link } from "react-router-dom"; // For navigation
import "./Header.css"; // Custom styles for the header

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="header">
        <Navbar.Brand href="/" className="brand">
          <img src="/logo.png" alt="French Learning Logo" className="logo" />{" "}
          French Learning App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/syllables">
              Syllables
            </Nav.Link>
            <Nav.Link as={Link} to="/tests">
              Tests
            </Nav.Link>
            <Nav.Link as={Link} to="/progress">
              Progress
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/level">
              Levels
            </Nav.Link>
            <Nav.Link as={Link} to="/learning-path">
              Learning Path
            </Nav.Link>
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
