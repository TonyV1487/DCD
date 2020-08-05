import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainImage from "../components/MainImage";
import ServCards from "../components/Service Cards";
import EmailInput from "../components/EmailInput";
import data from "../data/services";

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <MainImage />
        </Col>
      </Row>
      <Row>
        {data.map((service) => (
          <Col lg={4} sm={6} key={service.service}>
            <ServCards
              key={service.service}
              type={service.service}
              info={service.detail}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col size="md-12">
          <EmailInput />
        </Col>
      </Row>
    </>
  );
};

export default Home;
