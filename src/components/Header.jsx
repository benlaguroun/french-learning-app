import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down, hide navbar
      } else {
        setShowNavbar(true); // Scrolling up, show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${showNavbar ? "show" : "hide"}`}
      fixed="top"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <img src="../images/logo.png" alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
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
            <Nav.Link as={Link} to="/learning-path">
              Learning Path
            </Nav.Link>
          </Nav>
          <div className="navbar-buttons">
            <Button variant="outline-primary" className="me-2">
              Register
            </Button>
            <Button variant="primary">Sign In</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
