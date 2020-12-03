import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import img from "./img.jpg";

function TestImage() {
  return (
<>
    <Image src={img} className="img" />
    
</>
    
  );
}

export default TestImage;

