import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Product() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ea.
        Beatae veniam tempore.
      </p>

      <div className="a-container">
        <Productbox image={pimage1} title="Have a Candy" />
        <Productbox image={pimage2} title="Have a Candy" />
        <Productbox image={pimage1} title="Have a Candy" />
      </div>
    </div>
  );
}

export default Product;
