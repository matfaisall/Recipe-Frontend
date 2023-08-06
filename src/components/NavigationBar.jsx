import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style/NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex flex-column flex-lg-row gap-2 gap-md-3 gap-lg-5 py-3">
            <Link to="/" className="link">
              Home
            </Link>
            <Nav>
              <Link to="/add-recipe" className="link">
                Add Menu
              </Link>
            </Nav>
            <Nav>
              <Link to="/list-recipe" className="link">
                Search Menu
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
