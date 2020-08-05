import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function ServLvlCards(props) {
  // console.log(props.type);
  // console.log(props.info);

  const [servLvlArray, setServLvlArray] = useState();

  useEffect(() => {
    var arrayLength = props.info.length;
    var servLvlDataArray = [];
    for (var i = 0; i < arrayLength; i++) {
      servLvlDataArray.push(props.info[i]);
      // console.log(servLvlDataArray);
    }
    setServLvlArray(servLvlDataArray);
    console.log(servLvlArray);
  }, []);

  console.log(servLvlArray);

  return (
    <>
      <Card>
        <Card.Img variant="top" src="http://placehold.it/100x100" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default ServLvlCards;
