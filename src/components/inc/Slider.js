import React from "react";

function Slider() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/slider.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Slider;
