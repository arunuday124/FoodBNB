import React from 'react';
import { ChevronDown } from 'lucide-react';
import intro from '../../assets/header_video.mp4';
import app_store from '../../assets/app.avif'
import play_store from '../../assets/play.avif'
import foodbnb from '../../assets/foodbnb1.svg'

import './Header.css';

const Header = () => (
  <div className="hero-container">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      className="hero-video"
    >
      <source src={intro} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Gradient overlay for readability */}
    <div className="hero-overlay"></div>

    <div className="hero-content">
      <div className="hero-text-container">
        
        {/* //this is the logo image */}
        <img src={foodbnb} alt="" className='main_icon'/> 


        <h1 className="hero-title">
          FoodBNB
        </h1>
        
        <div style={{fontWeight:"bold", fontSize:"1.5rem"}}>
          
          Taste the comfort of 
          <br /> 
          <div style={{color:"rgb(255, 76, 53)", fontWeight:"bold" ,fontSize:"2.5rem"}}>
            Home
          </div>
          
        </div>
      </div>

      <div className="hero-buttons">
        <div className="hero-buttons-inner">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hero-app-link">
            <img
              src={play_store}
              alt="Google Play"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hero-app-link">
            <img
              src={app_store}
              alt="App Store"
            />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-text">
          Scroll down
          <ChevronDown className="hero-scroll-icon" size={20} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;