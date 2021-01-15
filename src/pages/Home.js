import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainImage from "../components/MainImage";
import TestImage from "../components/TestImage";
import ServCards from "../components/Service Cards";
import EmailInput from "../components/EmailInput";
import data from "../data/services";

const Home = () => {

// Init different states with this service type info
const [servType, setServType] = useState();
const [servInfo, setServInfo] = useState();
const [servLogo, setServLogo] = useState();
const  [servArray, setServArray] = useState([]);
const [avType, setAvType] = useState();
const [avInfo, setAvInfo] = useState();
const [avLogo, setAvLogo] = useState();
const [avArray, setAvArray] = useState([]);

useEffect(() => {
  var serviceLength = data[0].service.length;
  var aviationLength = data[0].aviation.length;
  var serviceDataArray = [];
  var aviationDataArray = [];

  // Select the correct service by navigating data and matching to id
  for (var i = 0; i < serviceLength; i++) {
    serviceDataArray.push(data[0].service[i])
  }
  setServArray(serviceDataArray);

  for (var ii = 0; ii < aviationLength; ii++) {
    aviationDataArray.push(data[0].aviation[ii])
  }
  setAvArray(aviationDataArray);

}, []);

  return (
    <>
      <Row>
        <Col>
          <TestImage />
          </Col>
      </Row>
        <Row className="center">
          <div className="titleFont">
        Services
        </div>
        </Row>
        <Row>
        <Col lg={2}></Col>
          <Col lg={8}>
            <Row>
        {servArray.map((service) => (
          <Col lg={4} md={6} sm={12} key={service.index}>
            <ServCards
              key={service.index}
              type={service.service}
              info={service.detail.short}
              logo={service.logo}
            />
          </Col>
          
        ))}
        </Row>
        </Col>
        <Col lg={2}></Col>
        </Row>
        <Row className="center">
          <div className="titleFont">
        Aviation
          </div>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Row>
        {avArray.map((service) => (
          <Col lg={4} md={6} sm={12} key={service.index}>
            <ServCards
              key={service.index}
              type={service.service}
              info={service.detail.short}
              logo={service.logo}
            />
          </Col>
        
        ))}
        </Row>
        </Col>
        <Col lg={2}></Col>
        </Row>
      <Row className="py-5">
        <Col size="md-12">
          <EmailInput />
        </Col>
      </Row>
    </>
  );
};

export default Home;
