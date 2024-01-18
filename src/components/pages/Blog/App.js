import React, { useState } from 'react';
import './App.css';
import Image from './Image';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('Education');
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // function handleScrollAnimation() {
  //   const animateElements = document.querySelectorAll('.animate-on-scroll');
    
  //   animateElements.forEach((element) => {
  //     if (isElementInViewport(element)) {
  //       element.style.animation = 'slideInLeft 2s ease';
  //       element.style.opacity = 1;
  //     }
  //   });
  // }
  
  // window.addEventListener('scroll', handleScrollAnimation);
  // window.addEventListener('resize', handleScrollAnimation);
  

  // window.addEventListener('load', handleScrollAnimation);

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

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
    <div>
      
      <main className="main-container">
        <div className="center-content">
          <img src="./images/ngo 1.jpg" alt="i1" className="center-image" />
          <div className="left-part">  
          </div>
          <div className="right-part">
            <div className="content">
              <h1>Celebrating the Mosaic of Humanity:</h1>
              <p><strong>Where compassion, creativity, and collaboration converge to paint a brighter world for all.</strong></p>
            </div>
          </div>
        </div>
        <div className="center-content2">

        <div className="image-container">
            <img src="./images/hr.jpg" alt="I1" class="animate-on-scroll" />
            <div className="image-text">In our mission, we advocate for equal rights as the bedrock of a compassionate and inclusive society, fostering opportunities for all to lead empowered lives</div>
          </div>

        
          <div className="ic-2">
            <img src="./images/pv.jpg" alt="I2" class="animate-on-scroll"/>
            <div className="image-text">Extending a helping hand to displaced individuals, rebuilding lives and fostering hope for refugees</div>
          </div>

          <div className="ic-3">
            <img src="./images/wr.jpg" alt="I3" class="animate-on-scroll" />
            <div className="image-text">Championing women's rights through advocacy, empowerment, and creating pathways for gender equality</div>
          </div>

          
          <div className="ic-4">
            <img src="./images/er.jpg" alt="I4" class="animate-on-scroll"/>
            <div className="image-text">Promoting equality through accessible and inclusive education for all</div>
          </div>

        </div>

        <h1>How We Make a Difference</h1>
        <br></br>
        <ul className="horizontal-list">
          
          <li className={`list-item ${selectedItem === 'Education' ? 'selected' : ''}`} onClick={() => handleListItemClick('Education')}>Education</li>

          <li className={`list-item ${selectedItem === 'Healthcare' ? 'selected' : ''}`} onClick={() => handleListItemClick('Healthcare')}>Healthcare
          </li>

          <li className={`list-item ${selectedItem === 'Poverty Relief' ? 'selected' : ''}`} onClick={() => handleListItemClick('Poverty Relief')}>Poverty Relief
          </li>
          
          <li className={`list-item ${selectedItem === 'Women Empowerment' ? 'selected' : ''}`} onClick={() => handleListItemClick('Women Empowerment')}>Women Empowerment
          </li>

          <li className={`list-item ${selectedItem === 'Enviromental Care' ? 'selected' : ''}`} onClick={() => handleListItemClick('Enviromental Care')}>Enviromental Care
          </li>
          
          <li className={`list-item ${selectedItem === 'Disaster Aid' ? 'selected' : ''}`} onClick={() => handleListItemClick('Disaster Aid')}>Disaster Aid</li>
        </ul>

        {selectedItem === 'Education' && (
          <div className="list-div">
            <img src="./images/ers1.jpg" alt="I5" className="image-left" />
            <p>
            Our NGO is dedicated to ensuring equal educational rights for all. Through our education program, we strive to break down barriers that hinder access to quality learning. We work tirelessly to bridge the gap by providing resources, scholarships, and support to marginalized communities. By advocating for policy changes and raising awareness about the importance of education, we empower individuals to pursue their dreams and unlock their full potential. Our efforts are geared towards creating a world where every child, regardless of their background, has an equal opportunity to learn, grow, and shape a brighter future.
            </p>
            <img src="./images/ers2.jpg" alt="I6" className="image-right" />
          </div>
        )}

        {selectedItem === 'Healthcare' && (
          <div className="list-div">
            <img src="./images/hrs1.jpeg" alt="I5" className="image-left" />
            <p>
            Our NGO is committed to improving healthcare accessibility and quality for underserved populations. Through medical camps, awareness campaigns, and partnerships with local clinics, we strive to ensure that basic healthcare services are within reach for everyone. By focusing on preventive care, health education, and medical assistance, we aim to enhance the overall well-being of communities in need.
            </p>
            <img src="./images/hrs2.jpg" alt="I6" className="image-right" />
          </div>
        )}

        {selectedItem === 'Poverty Relief' && (
          <div className="list-div">
            <img src="./images/prs1.jpeg" alt="I5" className="image-left" />
            <p>
            Addressing the root causes of poverty is at the heart of our NGO's mission. We implement sustainable solutions such as vocational training, microfinance initiatives, and livelihood support programs to empower individuals and families to break the cycle of poverty. Through these efforts, we aim to create pathways to economic independence and improve the overall living conditions of vulnerable communities.
            </p>
            <img src="./images/prs2.jpg" alt="I6" className="image-right" />
          </div>
        )}

        {selectedItem === 'Women Empowerment' && (
          <div className="list-div">
            <img src="./images/wrs1.png" alt="I5" className="image-left" />
            <p>
            Our NGO is dedicated to advancing gender equality and empowering women. We provide education and skills training to enhance women's economic opportunities, promote leadership development, and raise awareness about women's rights. By fostering an environment of support and empowerment, we strive to create a society where women are active participants, decision-makers, and beneficiaries of positive change.
            </p>
            <img src="./images/wrs2.jpg" alt="I6" className="image-right" />
          </div>
        )}

        {selectedItem === 'Enviromental Care' && (
          <div className="list-div">
            <img src="./images/ecrs1.jpg" alt="I5" className="image-left" />
            <p>
            Protecting our environment for future generations is a core focus of our NGO. We engage in tree planting initiatives, waste management projects, and educational campaigns to promote sustainable practices and raise environmental consciousness. Through community involvement and advocacy, we work towards preserving natural resources, mitigating climate change, and ensuring a cleaner, healthier planet.
            </p>
            <img src="./images/ecrs2.jpg" alt="I6" className="image-right" />
          </div>
        )}


        {selectedItem === 'Disaster Aid' && (
          <div className="list-div">
            <img src="./images/das1.jpg" alt="I5" className="image-left" />
            <p>
            When disaster strikes, our NGO is there to provide rapid and effective aid. Through our disaster relief efforts, we offer emergency supplies, shelter, medical assistance, and psychological support to affected communities. By collaborating with other organizations and utilizing a coordinated approach, we aim to help communities rebuild and recover in the aftermath of natural or humanitarian disasters.
            </p>
            <img src="./images/das2.jpg" alt="I6" className="image-right" />
          </div>
        )}

        <div className="growth">
        <h1>Pathways to Progress.</h1>
        <br></br>
        <h4>Progress requires Purpose.</h4>
        <h5>Our three pathways embody the most impactful areas for positive change in society today, guiding our efforts towards meaningful and transformative outcomes.</h5>
        <br></br>
        <br></br>
        <div className="growth2">
      <div className="box">
        <h4>Education and Empowerment</h4>
        <p>Illuminating minds, empowering futures – education as a catalyst for enlightened choices and enriched societies.</p>
        <h1>EE</h1>
      </div>
      <div className="box">
      <div className='contentt'>
        <h4>Health and Well-being</h4>
        <p> Nurturing vitality, shaping lives – healthcare advocacy harmonizing well-being, vitality, and reduced mortality.</p>
        <h1>HW</h1>
        </div>
      </div>
      <div className="box">
        <h4>Environmental Conservation</h4>
        <p>Sustaining Earth's legacy – strategic stewardship, relentless advocacy, and mindful conservation scripting a future of coexistence.</p>
        <h1>EC</h1>
      </div>
    </div>
        </div>
        <br></br>
        <br></br>

        {rows.map((images, index) => (
          <Image images={images} key={index} />
        ))}
        


      </main>
      
    </div>
  );
};

export default App;
