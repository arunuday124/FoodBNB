import React, { useEffect, useRef } from 'react';
import './About.css';

const AboutSection = () => {
  const tiltCardRefs = useRef([]);

  useEffect(() => {
    // Vanilla Tilt initialization
    tiltCardRefs.current.forEach((card) => {
      if (card && !card.vanillaTilt) {
        const tilt = VanillaTilt.init(card, {
          max: 15,
          speed: 300,
          glare: true,
          "max-glare": 0.4,
          scale: 1.03
        });
      }
    });

    return () => {
      tiltCardRefs.current.forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="unique-about-section">
      <div className="container">
        {/* LEFT: ABOUT US CONTENT */}
        <div className="about-left">
          <div className="about-chip">✨ About FoodBNB</div>
          <h2>
            Not a restaurant app — a home away from home.
          </h2>
          <p>
            FoodBNB was built for people who moved away from their families but never moved on
            from the taste of home. Every dish comes from a real kitchen, cooked with warmth,
            memories, and the same care someone's maa, mashi, pishi, kaki or dida uses for their own family.
          </p>
          <p>
            We don't serve "orders." We serve emotions — through recipes that have traveled generations.
          </p>
          <button className="btn btn-primary">Learn More →</button>
        </div>

        {/* RIGHT: 3D INTERACTIVE CARDS + FLOATING GLOW EFFECT */}
        <div className="about-right">
          {/* Floating blob background */}
          <div className="floating-blob"></div>

          {/* 3D Tilt Cards */}
          <div 
            className="tilt-card tilt-card-1" 
            ref={(el) => (tiltCardRefs.current[0] = el)}
            data-tilt
          >
            <h3>💖 Handcrafted by Home Cooks</h3>
            <p>
              Every meal comes from a verified home kitchen with real stories and real people.
            </p>
          </div>

          <div 
            className="tilt-card tilt-card-2" 
            ref={(el) => (tiltCardRefs.current[1] = el)}
            data-tilt
          >
            <h3>⭐ Emotional Food Filters</h3>
            <p>
              Choose food based on feelings — Homesick, Exam Stress, Comfort Needed, Post-breakup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Load Vanilla Tilt from CDN
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js';
script.async = true;
document.head.appendChild(script);

export default AboutSection;