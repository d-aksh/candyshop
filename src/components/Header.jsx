import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great Time For A Good Taste Of Some Candies.</h3>
        <h1>
          <span>CANDIES</span> FOR
          <br /> LIFE
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <Link href="#" className="header-btn">
            ORDER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
