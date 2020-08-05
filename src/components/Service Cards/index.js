import React from "react";
import { Card } from "react-bootstrap";

function ServCards(props) {
  const { type, info } = props;
  console.log(type);
  console.log(info);
  return (
    <Card>
      <Card.Img variant="top" src="http://placehold.it/100x100" />
      <Card.Body>
        <Card.Title>{type}</Card.Title>
        {info.map((info) => (
          <Card.Text key={info}>{info.short}</Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
}
export default ServCards;
