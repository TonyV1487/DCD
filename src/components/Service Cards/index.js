import React from "react";
import { Card } from "react-bootstrap";

function ServCards(props) {
  const { type, info } = props;
  return (
    <Card>
      <Card.Img variant="top" src="http://placehold.it/100x100" />
      <Card.Body>
        <Card.Title>{type}</Card.Title>
        <Card.Text>{info}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServCards;
