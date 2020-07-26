import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import data from "./data/services";
import NavComp from "./components/Navbar";
import MainImage from "./components/MainImage";
import ServCards from "./components/Service Cards";
import EmailInput from "./components/EmailInput";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col size="md-12">
            <NavComp />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainImage />
          </Col>
        </Row>
        <Row>
          {data.map((service) => (
            <Col lg={2} sm={6}>
              <ServCards
                key={service.type}
                type={service.type}
                info={service.info}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col size="md-12">
            <EmailInput />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
