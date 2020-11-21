import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./logo.png";
import "./style.css";

function NavComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="d-flex">
          <Navbar.Brand href="/" className="d-flex ml-4">
            <img
              alt=""
              src={Logo}
              className="d-inline-flex align-left img"
            />
          </Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="mx-4" href="/">
              Home
            </Nav.Link>
            <NavDropdown  
              className="mx-4"
              title="Vehicle"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/services/detailing">
                Detailing
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/semi">Semi</NavDropdown.Item>
              <NavDropdown.Item href="/services/undercoating">
                Undercoating
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/ceramics">
                Ceramics
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/paint_corrections">
                Paint Correction
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/painting">
                Painting
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown  
              className="mx-4"
              title="Aviation"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/services/av_extclean">
                Exterior Cleanings
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/av_intclean">Interior Cleaning</NavDropdown.Item>
              <NavDropdown.Item href="/services/av_paintrev">
                Paint Revitalization
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/av_ceramics">
                Ceramic Coating
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/av_brightwork">
                Brightwork
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/av_boots">
                Boots
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/av_painting">
                Painting
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-4" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="mx-4" href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="mx-4" href="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavComp;
