import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";

function EmailInput() {
  return (
    <>
      <Form>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="5">
            Stay connected and receive discounts!
          </Form.Label>
          <Col sm="5">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
          <Col sm="1">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col sm="1" />
        </Form.Group>
      </Form>
    </>
  );
}

export default EmailInput;
