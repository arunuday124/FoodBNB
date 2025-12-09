import React from "react";
import { useEffect, useState } from "react";
import "./Hero_section.css";
import paymentImg from "../../assets/payment.jpg";
import cook from '../../assets/cooking.png';

const Hero_section = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = [
    "Meals that feels like a hug💝",
    "Flavours that remind you of home. Meals that make a new city feel familiar",
    "Eat just not to fill you stomach, but to celebrate heart!",
    "Made with Love",
    "Support a kitchen, nourish your soul",
    "Always Fresh, Always Delicious",
  ];

  useEffect(() => {
    const currentText = rotatingTexts[textIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = 2000;

    let timer;

    if (!isDeleting && displayedText === currentText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    } else if (isDeleting) {
      // Delete character
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else {
      // Type character
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, rotatingTexts]);

  return (
    <div>
      <div className="stats-container">
        <div className="stats-content-wrapper">
          <div className="stats-text-container">
            <div className="stats-title">Better food for more people</div>

            {/* this part for the text change  */}
            <div className="stats-subtitle">
              <p className="rotating-text">
                {displayedText}
                <span className="cursor">|</span>
              </p>
            </div>
          </div>

        {/* <img
          src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png"
          className="stats-image-1"
          alt="Food 1"
        />
        <img
          src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png"
          className="stats-image-2"
          alt="Food 2"
        />
        <img
          src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png"
          className="stats-image-3"
          alt="Food 3"
        /> */}
        </div>
      </div>


      {/* instruction part for using the app */}
      <div>
        <section
          className="section container"
          style={{ paddingTop: "40px", paddingBottom: "80px" , }}
        >
          <div className="top_text">
            <span className="section-subtitle">SIMPLE PROCESS</span>
            <h2 className="section-title">From Our Home to Yours</h2>
          </div>

          <div className="steps-container">
            <div className="steps-connector-line"></div>

            {/* Step 1 */}
            <div className="step-item">
              <div className="step-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80"
                  alt="Select Location"
                  className="step-image"
                />
                <div className="step-badge badge-dark">1</div>
              </div>
              <h3 className="step-title">Select Location</h3>
              <p className="step-desc">
                Enter your pincode to find verified home kitchens in your
                neighborhood.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-image-wrapper">
                <img
                  src={cook}
                  alt="Choose Kitchen"
                  className="step-image"
                />
                <div className="step-badge badge-dark">2</div>
              </div>
              <h3 className="step-title">Choose Kitchen</h3>
              <p className="step-desc">
                Browse menus, read chef profiles, and choose a One-time meal or
                Monthly Dabba.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-item">
              <div className="step-image-wrapper">
                <img src={paymentImg} alt="Payment" className="step-image" />
                <div className="step-badge badge-dark">3</div>
              </div>
              <h3 className="step-title">Secure Checkout</h3>
              <p className="step-desc">
                Pay securely online. Customize your delivery schedule for
                subscriptions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-item">
              <div className="step-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=400&q=80"
                  alt="Delivery"
                  className="step-image"
                />
                <div className="step-badge badge-highlight">4</div>
              </div>
              <h3 className="step-title">Fast Delivery</h3>
              <p className="step-desc">
                Sit back! Hot, homemade food is delivered to your door via live
                tracking.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero_section;
