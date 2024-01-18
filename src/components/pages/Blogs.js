import React from "react";
import App from "./Blog/App";
import Image from "./Blog/Image";
import "./Blog/App.css";
import "./Blog/Image.css";

function Blogs() {
  const rows = [
    [
      { src: './images/ngo7.jpg', alt: 'Image 1', text: 'Empowered women, shaping a brighter future' },
      { src: './images/ngo8.jpg', alt: 'Image 2', text: 'Extending a helping hand to those affected by the floods, rebuilding lives together' },
      { src: './images/ngo9.jpg', alt: 'Image 3', text: 'Nurturing the earth, one seed at a time' },
    ],

    [
      { src: './images/ngo1.jpg', alt: 'Image 1', text: 'Unlocking limitless potential through education' },
      { src: './images/ngo4.jpg', alt: 'Image 2', text: 'Promoting wellness and care for all' },
      { src: './images/ngo2.jpeg', alt: 'Image 3', text: 'Empowering minds through the gift of education' },
    ],

    [
      { src: './images/ngo3.png', alt: 'Image 1', text: 'Raising awareness for better healthcare' },
      { src: './images/ngo5.jpg', alt: 'Image 2', text: 'Providing essential checkups for the underserved' },
      { src: './images/ngo6.jpg', alt: 'Image 3', text: 'Working towards a world without poverty.' },
    ],
  ];

  return (
    <>
      <App />
      {rows.map((images, index) => (
        <Image images={images} key={index} />
      ))}
    </>
  );
}

export default Blogs;
