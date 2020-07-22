import React from "react";
import "./style.css";

function MainImage() {
  return (
    <>
      <img
        src="http://placehold.it/2000x720"
        className="img-fluid"
        alt="Responsive image"
      ></img>
      <div className="text-block">
        <h4>Title</h4>
        <p>Some text about the image</p>
      </div>
    </>
  );
}

export default MainImage;
