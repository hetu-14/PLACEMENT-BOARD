
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import StudentData from './StudentData';
import Footer from './home/Footer';
import Company from './home/Company';
import Stats from './home/Stats';
import Top from './home/Top';
import St2 from './home/Stat2';

const Home = ({ user }) => {
  return (
    <>
       <Top/>
     <Company/>
      <StudentData />
      <Stats/>
      <St2/>
      <Footer/>
    </>
  );
};

export default Home;