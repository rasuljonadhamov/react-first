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
          <a>About Us</a>
        </li>
        <li>
          <a>Service</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div>
        <img src={Logo} />
      </div>
      <div className="leftSide">
        <img src={Search} />
        <img src={Buy} />
        <a>Register Now</a>
      </div>
    </div>
  );
}

export default Header;
