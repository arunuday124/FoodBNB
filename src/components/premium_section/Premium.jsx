import React from "react";
import "./Premium.css";
import logo from '../../assets/foodbnb1.svg';

const Premium = () => (
  <div className="gold-container">
    {/* 4 corner coins */}
    <img src="/Coins_4.png" className="coin-top-left" alt="coin" />
    <img src="/Coins_2.png" className="coin-top-right" alt="coin" />
    <img src="/Coins_2.png" className="coin-bottom-left" alt="coin" />
    <img src="/Coins_1.png" className="coin-bottom-right" alt="coin" />

    <div className="gold-content">
      <img src={logo} className="gold-logo" alt="Food Bnb" />

      <div className="gold-premium-text">PREMIUM</div>

      <div className="gold-tagline">
        AUTHENTIC HOME-COOKED MEALS.IDEAL FOR STUDENTS AND PROFESSIONALS
      </div>

      <div className="gold-benefits-label">GOLD BENEFITS</div>

      <div className="gold-benefits-container">
        <div className="gold-benefit-card">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/bc9d2a579285cbdaa101b8fe2ba68f601741779645.png"
            className="gold-benefit-icon"
            alt="Free Delivery"
          />
          <div>
            <div className="gold-benefit-title">Free Delivery</div>
          </div>
        </div>

        <div className="gold-benefit-card">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d668ed26c7d4771318d0aa03b3f905e71741779899.png"
            className="gold-benefit-icon"
            alt="Extra Off"
          />
          <div>
            <div className="gold-benefit-title">
              {" "}
              Daily Dabba Services
              <br />
              From Verified Households
            </div>
            <div className="gold-benefit-description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Premium;