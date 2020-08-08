import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <Row>
        <Col md={6} sm={12}>
          {/* Contact form */}
          <Row>
            <h1>Contact Us</h1>
          </Row>
        </Col>
        <Col md={6} sm={12}>
          {/* Contact info */}
        </Col>
      </Row>
      <Row>
        <Col>{/* Google Maps */}</Col>
      </Row>
    </>
  );
};

export default Contact;
