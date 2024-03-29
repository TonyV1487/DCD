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
  const [serviceLvlsDesc, setServiceLvlsDesc] = useState([]);
  const [serviceImage, setServiceImage] = useState();
 

  useEffect(() => {
    var arrayLength = data[0].service.length;
    console.log(data)

    // Select the correct service by navigating data and matching to id
    for (var i = 0; i < arrayLength; i++) {
      if (data[0].service[i].index === id) {
        console.log(data[0].service[i].index)
        setServiceName(data[0].service[i].service);
        setServiceDescrip(data[0].service[i].detail[0].long);
        setServiceImage(data[0].service[i].image);

        // Move through array of service levels and set state
        var servLvlArray = data[0].service[i].servLevel.length;
        var serviceLvlDataArray = [];
        for (var y = 0; y < servLvlArray; y++) {
          serviceLvlDataArray.push(data[0].service[i].servLevel[y]);
          console.log(serviceLvlDataArray);
        }
        
        setServiceLvls(serviceLvlDataArray);
        console.log(serviceLvls)
      } else {
        // If unable to match id to a service, do nothing
        console.log("no match")
      };

      
    }
  }, []);

  return (
    <>
      <Row className="justify-content-md-center">
        <Image src={serviceImage} fluid />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} className="font title">{serviceName}</Col>
        <Col md={2} />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} className="font description">{serviceDescrip}</Col>
        <Col md={2} />
      </Row>
      <Row className="space-evenly">
        {serviceLvls.map((servLvl) => (
          <Col sm={6} md={4}>
          <Card key={servLvl.level}>
            <Card.Img variant="top" src={servLvl.image} />
            <Card.Body>
              <Card.Title className="font title">{servLvl.title}</Card.Title>
              <Card.Text className="font">{servLvl.detail}</Card.Text>
              <ul className="ul">
              {servLvl.bullet.map((bp, index) =>(
                <Card.Text className="font" key={index}>
                    <li>{bp}</li>
                </Card.Text>
              ))}
              </ul>
                <Card.Text className="font">{serviceLvlsDesc}</Card.Text>
              <Card.Text className="font">{servLvl.price}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Services;
