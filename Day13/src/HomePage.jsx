
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import image1 from "./assets/image1.jpg"
// import image2 from "./assets/image2.jpg"
// import university from "./assets/university.jpg"

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
const HomePage = () => {
  useEffect(() => {
    // const backgroundSlider = document.querySelector('.background-slider');

    // const intervalId = setInterval(() => {
    //   backgroundSlider.style.transform = 'translateX(-100%)';
    //   setTimeout(() => {
    //     backgroundSlider.appendChild(backgroundSlider.firstElementChild);
    //     backgroundSlider.style.transition = 'none';
    //     backgroundSlider.style.transform = 'translateX(0)';
    //     setTimeout(() => {
    //       backgroundSlider.style.transition = 'transform 1s ease-in-out';
    //     });
    //   }, 1000);
    // }, 5000);

    // Clean up the interval on component unmount
    // return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <div className="background-slider">

          {/* Add more images as needed */}
        </div>
        <div className="overlay-text">
          <h1>BEC ENQUIRY MANAGEMENT</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;