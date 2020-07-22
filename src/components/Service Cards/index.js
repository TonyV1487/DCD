import React from "react";
import { Card, Button } from "react-bootstrap";

function ServCards(props) {
  const { type, info } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="http://placehold.it/100x100" />
      <Card.Body>
        <Card.Title>{type}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
  );
}
export default ServCards;
