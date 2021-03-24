import React from "react";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "./contexts/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aviation from "./pages/Aviation";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import Profile from "./pages/Profile"
import NavComp from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile";
import AddToGallery from "./pages/AddToGallery";


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
          <Route path="/signup" children={<Signup />}>
              <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <Signup />
                      </div>
                    </Container>
                </Col>
              </Row>
            </Route>
            <Route path="/login" children={<Login />}>
              <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <Login />
                      </div>
                    </Container>
                </Col>
              </Row>
            </Route>
            <Route path="/forgot-password" children={<ForgotPassword />}>
            <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <ForgotPassword />
                      </div>
                    </Container>
                </Col>
            </Row>
            </Route>
            <Route path="/service/:id" children={<Services />}>
              <Row>
                <Col lg={12} sm={12}>
                  <Services />
                </Col>
              </Row>
            </Route>
            <Route path="/aviation/:id" children={<Aviation />}>
              <Row>
                <Col lg={12} sm={12}>
                  <Aviation />
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
            <Route path="/gallery" children={<Gallery />}>
              <Row>
                <Col lg={12} sm={12}>
                  <Gallery />
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
            <Route exact path={["/"]}>
              <Row>
                <Col lg={12} sm={12}>
                  <Home />
                </Col>
              </Row>
            </Route>
            <PrivateRoute path="/profile" component={<Profile />}>
            <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <Profile />
                      </div>
                    </Container>
                </Col>
              </Row>  
            </PrivateRoute> />
            <PrivateRoute path="/update-profile" children={<UpdateProfile />}>
            <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <UpdateProfile />
                      </div>
                    </Container>
                </Col>
              </Row>  
            </PrivateRoute> />
            <PrivateRoute path="/add-to-gallery" children={<AddToGallery />}>
            <Row>
                <Col lg={12} sm={12}>
                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                      <div className="w-100" style={{maxWidth: '400px'}}>
                      <AddToGallery />
                      </div>
                    </Container>
                </Col>
              </Row>  
            </PrivateRoute> />
          </Switch>
          <Row className="ft-background mt-2">
            <Footer />
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
