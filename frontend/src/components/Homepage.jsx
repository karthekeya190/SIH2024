import React, { useState } from 'react';
import './Homepage.css'; // Import the CSS file
import CardContainer from './CardContainer'; // Import the CardContainer component
import Categorization from './Categorization';
import Footer from './Footer';
const images = [
  { src: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/06/What-is-Disaster-Management-Preparation-Cycles-Types-Early-Warnings.jpg', text: 'Disaster Management' },
  { src: 'https://cdn.prod.website-files.com/620d42e86cb8ec4d0839e59d/620d42e96cb8ecfbf639f665_gis-for-disaster-response-hero-image.png', text: 'Data Aggregation' },
  { src: 'https://www.worldatlas.com/r/w1200/upload/c3/9f/8d/shutterstock-1033543780.jpg', text:'Disaster Categories' },
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCards, setShowCards] = useState(false); // New state to manage card container visibility

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollToNextSection = () => {
    setShowCards(true); // Show the card container when the button is clicked
  };

  return (
    <div className="homepage">
      {!showCards ? (
        <div className="slide">
          <img src={images[currentIndex].src} alt="Background" className="background-image" />
          <div className="text-overlay">
            <h1>{images[currentIndex].text}</h1>
          </div>
          <div className="scroll-button left" onClick={handlePrevImage}>
            &#171; {/* Symbol for '<<' */}
          </div>
          <div className="scroll-button right" onClick={handleNextImage}>
            &#187; {/* Symbol for '>>' */}
          </div>

          {/* Downward Arrow for Scrolling */}
          <div className="get-started-button" onClick={scrollToNextSection}>
        Get Started
      </div>
        </div>
      ) : (
        <Categorization /> // Render CardContainer when showCards is true
        
      )}

    </div>
  );
};

export default Homepage;
