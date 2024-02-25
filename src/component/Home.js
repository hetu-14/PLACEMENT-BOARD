
// import React,{useState} from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import StudentData from './home/StudentData';
import Footer from './home/Footer';
import Company from './home/Company';
import Stats from './home/Stats';
import Top from './home/Top';
import St2 from './home/Stat2';
/// ... (your existing imports)

import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const Home = ({ user }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsContentVisible(true);
  };

  return (
    <div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <Top />
      </div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <Company />
      </div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <StudentData />
      </div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <Stats />
      </div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <St2 />
      </div>
      <div
        className={`transition-fade ${isContentVisible ? 'show' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Home;
