import React from "react";
import { Link } from "react-router-dom";
import './VideoSection.css';
import CustomButton from "./CustomButton";
import VolunteerForm from './VolunteerForm';


function VideoSection() {
    return (
        <div className="video-container">
            <video className="bg-video" src="../videos/video-3.mp4" type="video/mp4" autoPlay loop muted />
            <div className="content-container1">
                <h1 className="heading-main1">BE A SUPPORTING MEMBER</h1>
                <p>A supporting member of our NGO empowers our mission and fosters positive change in the community.</p>
                 <div className="volunteer-btn">
                     <Link to="/volunteer-form">
                        <CustomButton text="VOLUNTEER" />
                    </Link> 
                    
                </div> 
            </div>
        </div>
    )
}

export default VideoSection;