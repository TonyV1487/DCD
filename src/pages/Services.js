import React, { useState, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import data from "../data/services";
import { useParams } from "react-router-dom";
import "./style.css";

const Services = () => {
  // Pull in service type from URL
  let { id } = useParams();

  // Init different states with this service type info
  const [serviceName, setServiceName] = useState();
  const [serviceDescrip, setServiceDescrip] = useState();
  const [serviceLvls, setServiceLvls] = useState([]);

  useEffect(() => {
    var arrayLength = data.length;

    // Select the correct service by navigating data and matching to id
    for (var i = 0; i < arrayLength; i++) {
      if (data[i].index === id) {
        setServiceName(data[i].service);
        setServiceDescrip(data[i].detail[0].long);

        // Move through array of service levels and set state
        var servLvlArray = data[i].servLevel.length;
        var serviceLvlDataArray = [];
        for (var y = 0; y < servLvlArray; y++) {
          serviceLvlDataArray.push(data[i].servLevel[y]);
          console.log(serviceLvlDataArray);
        }
        setServiceLvls(serviceLvlDataArray);
      } else {
        // If unable to match id to a service, do nothing
      }
    }
  }, []);

  return (
    <>
      <Row>
        <Image src="http://placehold.it/2000x500" fluid />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>{serviceName}</Col>
        <Col md={2} />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>{serviceDescrip}</Col>
        <Col md={2} />
      </Row>
      <Row className="space-evenly">
        {serviceLvls.map((servLvl) => (
          <Card key={servLvl.level}>
            <Card.Img variant="top" src="http://placehold.it/100x100" />
            <Card.Body>
              <Card.Title>{servLvl.title}</Card.Title>
              <Card.Text>{servLvl.detail}</Card.Text>
              <Card.Text>{servLvl.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Services;
