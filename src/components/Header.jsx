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
              🏠 الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/tests">
              📝 الاختبارات
            </Nav.Link>
            <Nav.Link as={Link} to="/progress">
              📊 تقدمك
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              ℹ️ من نحن؟
            </Nav.Link>{" "}
            {/* Updated Link */}
            <Nav.Link as={Link} to="/learning-path">
              📚 مسار التعلم
            </Nav.Link>
          </Nav>
          <div className="navbar-buttons">
            <Button
              as={Link}
              to="/register"
              variant="outline-primary"
              className="me-2"
            >
              تسجيل
            </Button>
            <Button as={Link} to="/login" variant="primary">
              تسجيل الدخول
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
