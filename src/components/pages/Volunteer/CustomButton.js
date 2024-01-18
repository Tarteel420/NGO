import React, { useState } from 'react';

const CustomButton = ({ text, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = {
        backgroundColor: isHovered ? 'white' : '#aad8cd',
        color: 'black',
        padding: '10px 20px',
        fontSize: '20px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s', 
      };

    const handleMouseEnter = () => {
        setIsHovered(true); // Change background color on hover
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false); // Reset background color when not hovering
      };
  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      {text}
    </button>
  );
};

export default CustomButton;
