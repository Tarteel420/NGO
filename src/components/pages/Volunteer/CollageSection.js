import React from 'react';
import './CollageSection.css';
import ImageWithHoverText from './ImageWithHoverText';


const CollageSection = () => {
  return (
    <>
      <div><h1 className='heading-text2'>Our Projects</h1></div>
    <div className="image-gallery1">
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic1.jpg"
        text="Relieving hunger, spreading hope."
        />
      </div>
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic2.jpg"
        text="Illuminating futures through childhood education."
      />
      </div>
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic3.jpg"
        text="Caring for creatures, shaping compassionate futures."
      />
      </div>
    </div> 
    <div className="image-gallery1">
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic4.jpg"
        text="Girls' rights: progress and equality."
      />
      </div>
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic6.jpg"
        text="Preserving nature's balance for a greener tomorrow."
      />
      </div>
      <div className="image-container1">
      <ImageWithHoverText
        imageUrl="/images/pic7.jpg"
        text="Fostering strength and independence in women."
      />
      </div>
    </div> 

    </>
  );
};

export default CollageSection;
