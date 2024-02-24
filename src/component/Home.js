
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import StudentData from './home/StudentData';
import Footer from './home/Footer';
import Company from './home/Company';
import Stats from './home/Stats';
import Top from './home/Top';

const Home = ({ user }) => {
  return (
    <>
       <Top/>
       <Company/>
      <StudentData />
      <Stats/>
      <Footer/>
    </>
  );
};

export default Home;