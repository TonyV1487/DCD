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
          <Col lg={12} sm={12} key={service.service}>
            <ServCards
              key={service.service}
              type={service.service}
              info={service.detail}
            />
          </Col>
        ))}
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
