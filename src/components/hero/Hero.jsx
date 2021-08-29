import React from "react";
import "./hero.scss";
// import "../../assets/css/grid.css";

function Hero() {
  return (
    <div className="home-page-banner">
      <div className="row">
        <div className="hero-container">
          <div className="container-info">
            <h1>Find a trusted professional for your home needs</h1>
            <div className="info__small">
              Reliable service with over 15,000 experienced professionals from
              house cleaning to shipping
            </div>
          </div>
          <div className="container-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
