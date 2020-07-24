import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import { Card, CardDeck } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import data from "./data/services";
import NavComp from "./components/Navbar";
import MainImage from "./components/MainImage";
import ServCards from "./components/Service Cards";

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
      </Container>
    </div>
  );
}

export default App;
