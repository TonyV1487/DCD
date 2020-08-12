import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="d-flex">
        <div className="d-flex mr-auto">
          <Navbar.Brand href="#home">Diamond Ceramics & Detailing</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="mx-4" href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              className="mx-4"
              title="Services"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Detailing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Semi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Undercoating
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ceramics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Paint Correction
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Painting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Aviation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-4" href="#link">
              Contact
            </Nav.Link>
            <Nav.Link className="mx-4" href="#link">
              Gallery
            </Nav.Link>
            <Nav.Link className="mx-4" href="#link">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavComp;
