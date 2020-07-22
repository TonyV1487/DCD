import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import { Card, CardDeck } from "react-bootstrap";
import "./App.css";
import data from "./data/services";
import NavComp from "./components/Navbar";
import MainImage from "./components/MainImage";
import ServCards from "./components/Service Cards";

function App() {
  return (
    <div className="App">
      <NavComp />
      <MainImage />
      {data.map((service) => (
        <ServCards key={service.type} type={service.type} info={service.info} />
      ))}
    </div>
  );
}

export default App;
