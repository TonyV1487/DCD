import React from "react";
import "./style.css";
import { Navbar, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Container flex-wrap>
      <Navbar bg="dark" variant="dark">
        <Col>
          <Row className="justify-content-md-center">
            <p className="ft-title">Find us on Social Media</p>
          </Row>
          <Row className="justify-content-md-center">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
            <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
            <FontAwesomeIcon icon={faYelp} size="2x" color="white" />
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-md-center">
            <p className="ft-title">Visit Us</p>
          </Row>
          <Row className="justify-content-md-center">
            <p className="ft-text">
              841 E Wilson St<br></br>
              Batavia, IL 60510
            </p>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-md-center">
            <FontAwesomeIcon icon={faPhone} size="lg" color="white" />
            <p className="ft-title">Call Us - (555) 555-5555</p>
          </Row>
          <Row className="justify-content-md-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
            <p className="ft-title">Email Us - info@dcdtl.com</p>
          </Row>
        </Col>
      </Navbar>
    </Container>
  );
}

export default Footer;
