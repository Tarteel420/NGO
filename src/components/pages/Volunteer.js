import React from 'react';
import VideoSection from './Volunteer/VideoSection';
import Counter from './Volunteer/Counter';
import CollageSection from './Volunteer/CollageSection';
import VolunteerText from './Volunteer/VolunteerText';
import FeedbackSlider from './Volunteer/FeedbackSlider';


const Volunteer = () => {
  return (
    <div>
      <VideoSection />
      <VolunteerText />
      <FeedbackSlider />
      <CollageSection />
      <Counter />
      
    </div>
  );
};

export default Volunteer;

