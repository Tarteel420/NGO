import React, { useState, useEffect } from 'react';
import './FeedbackSlider.css';

const feedbackData = [
  {
    name: "Ali Sulaiman",
    date: "08 Aug, 2023",
    feedback: "This whole thing got started in 2007 and as rewarding as our history has been, it’s the future we’re most excited about.",
    image: "./images/person1.jpg",
  },
  {
    name:"",
    date: "04 May, 2023",
    feedback:"Volunteering was a reminder that even the smallest gestures can have a ripple effect. It was heartening to see the positive change we initiated through our collective actions.",
    image: "./images/person2.webp",
  },
  {
    name: "Hafsa Sohail",
    date: "07 July, 2023",
    feedback: "Being a volunteer was truly rewarding. I was able to contribute to a meaningful cause and make a positive impact, all while learning and growing personally.",
    image: "./images/person3.webp",
  },
  {
    name:"",
    date: "04 May, 2023",
    feedback: "Volunteering allowed me to see the power of small actions coming together to create a big difference. It was heartwarming to witness the positive change we could bring about as a team.",
    image: "./images/person4.png",
  },
];

const FeedbackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 5000); // Change feedback every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentFeedback = feedbackData[currentIndex];

  return (
    <>
      <h2 className='feedback-heading'>Volunteer thoughts</h2>
      <div className="feedback-slider">
      <div className="user-image">
    <img src={currentFeedback.image} alt="User" className="user-avatar" />
  </div>
        <div className="feedback-message">{currentFeedback.feedback}</div>
        <div className="feedback-info">
          <p className="feedback-name">{currentFeedback.name}</p>
          <p className="feedback-date">{currentFeedback.date}</p>
        </div>
        <div className="nav-row">
          <img
            src="/images/left-arrow.png"
            alt="Previous"
            className="nav-icon"
            onClick={handlePrevClick}
          />
          <img
            src="/images/right-arrow.png"
            alt="Next"
            className="nav-icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;

