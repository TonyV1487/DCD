import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import NavComp from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <Row className="ft-background">
            <Col lg={12} sm={12}>
              <NavComp />
            </Col>
          </Row>
          <Switch>
            <Route exact path={["/"]}>
              <Row>
                <Col lg={12} sm={12}>
                  <Home />
                </Col>
              </Row>
            </Route>
            <Route path="/services/:id" children={<Services />}>
              <Row>
                <Col lg={12} sm={12}>
                  <Services />
                </Col>
              </Row>
            </Route>
            <Route path="/contact">
              <Row>
                <Col lg={12} sm={12}>
                  <Contact />
                </Col>
              </Row>
            </Route>
            <Route path="/about">
              <Row>
                <Col lg={12} sm={12}>
                  <About />
                </Col>
              </Row>
            </Route>
          </Switch>
          <Row className="ft-background">
            <Footer />
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
