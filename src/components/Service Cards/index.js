import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

function ServCards(props) {
  const { type, info } = props;
  console.log(type);
  console.log(info);
  return (
    <Card>
      <Row>
        <Col lg={6}>
          <Image
            className="m-2"
            width="50%"
            src="http://placehold.it/200x100"
            fluid
          />
        </Col>
        <Col lg={6}>
          <Card.Body>
            <Card.Title>{type}</Card.Title>
            {info.map((info) => (
              <Card.Text key={info}>{info.short}</Card.Text>
            ))}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ServCards;
