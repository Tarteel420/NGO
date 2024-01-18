import React from 'react';
import './Image.css';

const Image = ({ images }) => {
  return (
    <div className="image-row">
      {images.map((image, index) => (
        <div className="image-cont" key={index}>
          <img src={image.src} alt={image.alt} className="image" />
          <p className="text">{image.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Image;

