import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const MainNavigation = () => {
  return (
    <>
      <nav>
        <ul className="ul">
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li className="li">
            <Link to="/tesla-users">Tesla EVs</Link>
          </li>
          <li className="li">
            <Link to="/other-evs">All Other EVS</Link>
          </li>
          <li className="li">
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
