import React from "react";
import "./Hero.css";
import Arrow from "../assets/arrow.png";
import HeroImg from "../assets/hero-img.png";
import User from "../assets/user.png";
import Star from "../assets/star.png";
import Harvest from "../assets/harvest.png";

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
        <div className="hero-wrapper">
          <div>
            <img className="hero__img" src={HeroImg} alt="Arrow" />
          </div>

          <ul className="info-list">
            <li className="wrapper">
              <div className="icon-wrappper">
                <img src={User} alt="Arrow" />
              </div>
              <div>
                <h1 className="hero-small-title">30K</h1>
                <p className="hero-small-desc">User Order</p>
              </div>
            </li>

            <li className="wrapper">
              <div className="icon-wrappper">
                <img src={Star} alt="Arrow" />
              </div>
              <div>
                <h1 className="hero-small-title">20K</h1>
                <p className="hero-small-desc">Reviews(4.8)</p>
              </div>
            </li>

            <li className="wrapper">
              <div className="icon-wrappper">
                <img src={Harvest} alt="Arrow" />
              </div>
              <div>
                <h1 className="hero-small-title">300</h1>
                <p className="hero-small-desc">Items</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
