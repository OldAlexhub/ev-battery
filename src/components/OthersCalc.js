import React, { useState } from "react";
import "../styles/OthersCalc.css";

const OthersCalc = () => {
  const [factory, setFactory] = useState();
  const [percent, setPercent] = useState();
  const [miles, setMiles] = useState();
  const [company, setCompany] = useState();
  const [battery, setBattery] = useState();
  const [mileage, setMileage] = useState();
  const [range, setRange] = useState();

  const handleFactoryChange = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (!isNaN(value)) {
      setFactory(value);
    }
  };

  const handlePercentChange = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (!isNaN(value)) {
      setPercent(value);
    }
  };

  const handleMilesChange = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (!isNaN(value)) {
      setMiles(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract values from state
    const companyRange = parseFloat(factory, 10);
    const myRange = parseFloat(miles, 10);
    const myPercent = parseFloat(percent, 10);

    // Check if values are valid numbers
    if (!isNaN(companyRange) && !isNaN(myRange) && !isNaN(myPercent)) {
      let fullCharge = myRange / (myPercent / 100);
      let batteryState = (fullCharge / companyRange) * 100;
      let lost = 100 - batteryState;

      setCompany(companyRange);
      setRange(fullCharge.toFixed(2));
      setBattery(batteryState.toFixed(2));
      setMileage(lost.toFixed(2));
    } else {
      alert("Please enter valid numbers in all fields.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://assets.carpages.ca/prod-blog/uploads/2019/10/e-green.jpg"
          alt="pic"
        />
        <label>Enter Manufactory 100% Range</label>
        <input
          type="number"
          placeholder="100% Range"
          value={factory}
          onChange={handleFactoryChange}
        />
        <label>Enter Your Current Charge State</label>
        <input
          type="number"
          placeholder="Current Charge State"
          value={percent}
          onChange={handlePercentChange}
        />
        <label>Enter Your Current Range</label>
        <input
          type="number"
          placeholder="Current Range"
          value={miles}
          onChange={handleMilesChange}
        />
        <button type="submit">Calculate Now</button>
      </form>
      <div className="calculations-results">
        <p>Manufactory Full Range: {company} Miles</p>
        <p>Current Full Charge: {range} Range Miles</p>
        <p>Current Battery State is at: {battery} %</p>
        <p>Which Means You Lost: {mileage} %</p>
      </div>
    </div>
  );
};

export default OthersCalc;
