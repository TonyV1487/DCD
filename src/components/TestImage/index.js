import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import LazyHero from 'react-lazy-hero';
import Img from "./img.jpg";

function TestImage() {
  return (
<>

  <LazyHero imageSrc={Img} minHeight="80vh" opacity=".3" parallaxOffset="50">
  <div class="text-block">
    <h2 className="font">"Keep your paint shining like a diamond"</h2>
  </div>
  </LazyHero>       
    
</>
    
  );
}

export default TestImage;

