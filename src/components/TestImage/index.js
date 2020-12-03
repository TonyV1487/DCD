import React from "react";
import "./style.css";
import LazyHero from 'react-lazy-hero';
import Img from "./img.jpg";

function TestImage() {
  return (
<>

            <LazyHero imageSrc={Img} minHeight="80vh" opacity=".5" parallaxOffset="50">
                <h1>"Keep your paint shining like a diamond"</h1>
            </LazyHero>

            {/* ... */}
       
    
</>
    
  );
}

export default TestImage;

