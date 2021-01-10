import React from "react";
import { Card, Image } from "react-bootstrap";
import "./style.css";


function ServCards(props) {
  const { type, info, logo } = props;
  console.log(type);
  console.log(info);
  console.log(logo);
  return (
    <Card className="text-center">
      <div>
        <img src={logo} className="servImg">
        </img>
      </div>
        
          <Card.Body>
            <Card.Title>{type}</Card.Title>

          </Card.Body>
    </Card>
  );
}
export default ServCards;

