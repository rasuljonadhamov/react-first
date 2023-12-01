import React from "react";
import "./Hero.css";
import Arrow from "../assets/arrow.png";

function Hero() {
  return (
    <div className="wrapper">
      <div className="container hero-section">
        <h1 className="hero-title">Organic Fruit & Vegetables</h1>
        <p className="hero-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
        <div className="hero-wrapper">
          <p className="hero-descc">Order Now</p>
          <div className="hero-img-wrapper">
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
