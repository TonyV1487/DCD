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
import NavComp from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <NavComp />
            </Col>
          </Row>
          <Switch>
            <Route exact path={["/"]}>
              <Home />
            </Route>
            <Route path="/services/:id" children={<Services />}>
              <Services />
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
