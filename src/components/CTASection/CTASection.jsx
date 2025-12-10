import React from "react";
import { ArrowRight, ChefHat, Utensils } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="ctaX-section">
      {/* Background gradient */}
      <div className="ctaX-bg-gradient" />

      {/* Decorative elements */}
      <div className="ctaX-decor-wrapper">
        <div className="ctaX-circle ctaX-circle-1" />
        <div className="ctaX-circle ctaX-circle-2" />
        <div className="ctaX-blur ctaX-blur-1" />
        <div className="ctaX-blur ctaX-blur-2" />

        {/* Floating icons */}
        <div className="ctaX-floating-icon ctaX-float-1">
          <ChefHat className="ctaX-icon" />
        </div>
        <div className="ctaX-floating-icon ctaX-float-2">
          <Utensils className="ctaX-icon" />
        </div>
      </div>

      <div className="ctaX-container">
        <div className="ctaX-content-box">
          {/* Badge */}
          <div className="ctaX-badge">
            <span className="ctaX-badge-dot" />
            <span>Coming Soon to Tripura, India</span>
          </div>

          {/* Heading */}
          <h2 className="ctaX-title">
            Be the first to <br /> taste the difference
          </h2>

          {/* Description */}
          <p className="ctaX-description">
            Join our waitlist to get early access when we launch. Whether you
            want home-cooked meals or want to become a cook — we'd love to have
            you!
          </p>

          {/* Buttons */}
          <div className="ctaX-buttons">
            <button className="ctaX-btn-primary">
              Join the Waitlist <ArrowRight className="ctaX-btn-icon" />
            </button>

            <button className="ctaX-btn-secondary">
              Register as a Cook <ChefHat className="ctaX-btn-icon" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="ctaX-launch-info">
            <div className="ctaX-info-card">
              <p className="ctaX-info-label">Launching in</p>
              <p className="ctaX-info-value">Tripura, India</p>
            </div>

            <div className="ctaX-info-card">
              <p className="ctaX-info-label">Expected</p>
              <p className="ctaX-info-value">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
