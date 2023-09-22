import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to the EV Battery Degradition Calculator </h1>
      <p>Keep track of your EV's battery degradition Level with Ease!!!</p>

      <div className="buttons">
        <Link to="/tesla-users" className="explore-button">
          Explore Tesla
        </Link>
        <Link to="/other-evs" className="explore-button">
          Explore Other EVs
        </Link>
      </div>
    </div>
  );
};

export default Hero;
