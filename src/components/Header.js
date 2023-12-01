import React from "react";
import "./Header.css";
import Logo from "../assets/earth-icon.svg";
import Search from "../assets/Search.svg";
import Buy from "../assets/Buy.png";

function Header() {
  return (
    <div className="container hero">
      <ul className="sitenav-list">
        <li>
          <a href="./">About Us</a>
        </li>
        <li>
          <a href="./">Service</a>
        </li>
        <li>
          <a href="./">Menu</a>
        </li>
        <li>
          <a href="./">Contact</a>
        </li>
      </ul>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="rightSide">
        <div className="imgContainer">
          <img src={Search} alt="logo" />
        </div>
        <div className="imgContainer">
          <img src={Buy} alt="logo" />
        </div>

        <a className="btn" href="./">
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Header;
