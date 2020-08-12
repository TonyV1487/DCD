import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import MapContainer from "../components/GoogleMap";

const Contact = () => {
  return (
    <>
      <Row className="py-3">
        <Col md={6} sm={12} className="textLeft px-5">
          {/* Contact form */}
          <h1>Contact Us</h1>
          <Form>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="firstName" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lastName" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="phone" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="textRight">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={6} sm={12} className="textLeft px-5">
          <Row>
            <Col md={2} sm={0}></Col>
            <Col md={8} sm={12}>
              {/* Contact info */}
              <div className="p-2">
                <h3>Phone</h3>
                <div>630-555-555</div>
              </div>
              <div className="p-2">
                <h3>Email</h3>
                <div>INFO@DCDTL.COM</div>
              </div>
              <div className="p-2">
                <h3>Visit Us</h3>
                <div>841 E Wilson St</div>
                <div>Batavia, IL 60510</div>
              </div>
            </Col>
            <Col md={2} sm={0}></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={2} sm={0}></Col>
        <Col md={8} sm={12}>
          {/* Google Maps */}
          <MapContainer />
        </Col>
        <Col md={2} sm={0}></Col>
      </Row>
    </>
  );
};

export default Contact;
