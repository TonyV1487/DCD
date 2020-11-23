import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
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
    <>
      <Col sm={12} md={4} className="p-1">
        <Row className="ft-row">
          <Col className="ft-title">Find us on Social Media</Col>
        </Row>
        <Row className="ft-row">
          <Col>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              color="white"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faYelp}
              size="2x"
              color="white"
              className="m-1"
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} className="p-1">
        <Row className="ft-row">
          <Col className="ft-title">Visit Us</Col>
        </Row>
        <Row className="ft-row">
          <Col className="ft-text">
            841 E Wilson St<br></br>
            Batavia, IL 60510
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4}>
        <Row className="ft-row">
          <Col className="ft-title">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              color="white"
              className="mr-3 mt-1"
            />
            Call Us - (555) 555-5555
          </Col>
        </Row>
        <Row className="ft-row">
          <Col className="ft-title">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              color="white"
              className="mr-3 mt-1"
            />
            Email Us - info@dcdtl.com
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Footer;
