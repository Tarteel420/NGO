
import React from 'react';

import './Projects.css';

function ProjectPage() {
    return (
        <div>
            <h1 className='projects-heading'>Projects</h1>
            <div>
                {/* Project 1 */}
                <div className="project-section">
                    <img src="./images/project1_image.jpg" alt="Project 1" />
                    <h2>Past Project: Empowerment of Women Through Education </h2>
                    <p>In collaboration with our NGO, several districts witnessed a transformative project aimed at providing free books and education to women. This initiative empowered women to drive positive change within their communities and bridge educational gaps. 
    
                     </p>
                </div>

                {/* Project 2 */}
                <div className="project-section">
                    <img src="./images/project2_image.jpg" alt="Project 2" />
                    <h2>Past Project: Advanced Healthcare Accessibility</h2>
                    <p>Our NGO undertook a comprehensive project in various districts to enhance healthcare accessibility and quality. This initiative played a vital role in promoting better well-being for all, leaving a lasting impact on the health sector.</p>
                </div>

                {/* Project 3 */}
                <div className="project-section">
                    <img src="./images/project3_image.jpg" alt="Project 3" />
                    <h2>Past Project: Alleviated Poverty Through Empowerment</h2>
                    <p>In collaboration with communities in different districts, our NGO spearheaded a project focused on breaking the cycle of poverty. Through empowerment initiatives, we enabled individuals and communities to achieve self-sufficiency and drive economic growth. </p>
                </div>

                {/* Project 4 */}
                <div className="project-section">
                    <img src="./images/project4_image.jpg" alt="Project 4" />
                    <h2>Past Project: Community Engagement for Change</h2>
                    <p>Our NGO's commitment to collaborative impact was exemplified in a series of projects conducted across various districts. Through local engagement, we fostered lasting change by connecting communities, igniting hope, and driving meaningful transformations.</p>
                    
    
                </div>

                {/* Project 5 */}
                <div className="project-section">
                    <img src="./images/project5_image.jpg" alt="Project 5" />
                    <h2>Past Project: Advocated for Minority Rights</h2>
                    <p>In multiple districts, our NGO passionately advocated for minority rights and protection, fostering inclusivity and social justice. Our work aimed to create a fair and equitable society where every individual's voice is heard and valued.</p>
                </div>

                {/* Project 6 */}
                <div className="project-section">
                    <img src="./images/project6_image.jpg" alt="Project 6" />
                    <h2>Past Project: Clean and Easy Water Supply</h2>
                    <p>Our NGO undertook the challenge of ensuring reliable water supply to a village, promoting improved sanitation and overall well-being. This project showcased our dedication to creating sustainable solutions that positively impact communities.</p>
                </div>

                {/* Project 7 */}
                <div className="project-section">
                    <img src="./images/project7_image.jpg" alt="Project 7" />
                    <h2>Past Project: Food Packages for Displaced and Refugees</h2>
                    <p>During a critical time, our NGO extended support by providing essential food packages to displaced and refugee populations. This project reflected our unwavering commitment to humanitarian aid, ensuring that those in need receive the sustenance and care they deserve.</p>
                </div>

             
            </div>
        </div>
    );
}

export default ProjectPage;


