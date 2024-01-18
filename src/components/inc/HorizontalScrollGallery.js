import React from 'react';
import g1 from "../pictures/g1.jpg";
import g2 from "../pictures/g2.jpg";
import g3 from "../pictures/g3.jpg";
import g4 from "../pictures/g4.jpg";
import g5 from "../pictures/g5.jpg";
import g6 from "../pictures/g6.jpg";

const images = [g1,g2,g3,g4,g5,g6]; // Add more images as needed

const HorizontalScrollGallery = () => {
  return (
    <div className="scroll-gallery" style={{marginTop:"100px"}}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default HorizontalScrollGallery;
