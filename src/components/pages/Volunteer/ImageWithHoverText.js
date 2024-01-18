import React from 'react';
import './ImageWithHoverText.css'; // Create this CSS file for styling

const ImageWithHoverText = ({ imageUrl, text }) => {
  
  return (
    <div className="image-container2">
      <img src={imageUrl} alt="Image" className="image-css" />
      <div className="overlay">{text}</div>
    </div>
  );
};

export default ImageWithHoverText;
