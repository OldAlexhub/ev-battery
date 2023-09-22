import React, { useState } from "react";
import TeslaImage from "./TeslaImage";
import "../styles/Form.css";

const Tesla = () => {
  const [percentage, setPercentage] = useState("");
  const [mileage, setMileage] = useState("");
  const [selectedOption, setSelectedOption] = useState("/");
  const [fullCharge, setFullCharge] = useState(0);
  const [degradation, setDegradation] = useState(0);
  const [lost, setLost] = useState(0);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const calcPercentage = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (!isNaN(value)) {
      setPercentage(value);
    }
  };

  const calcMileage = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (!isNaN(value)) {
      setMileage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const percentageOne = parseFloat(percentage, 10) / 100;
    const mileageValue = parseFloat(mileage, 10);
    const charge = mileageValue / percentageOne;

    let deg;
    if (selectedOption === "315") {
      deg = (charge / 315) * 100;
    } else if (selectedOption === "358") {
      deg = (charge / 358) * 100;
    } else if (selectedOption === "333") {
      deg = (charge / 333) * 100;
    } else if (selectedOption === "272") {
      deg = (charge / 272) * 100;
    } else if (selectedOption === "330") {
      deg = (charge / 330) * 100;
    } else if (selectedOption === "303") {
      deg = (charge / 303) * 100;
    } else if (selectedOption === "405") {
      deg = (charge / 405) * 100;
    } else if (selectedOption === "396") {
      deg = (charge / 396) * 100;
    } else if (selectedOption === "348") {
      deg = (charge / 348) * 100;
    } else if (selectedOption === "333B") {
      deg = (charge / 333) * 100;
    }

    const loose = 100 - deg;

    setFullCharge(charge.toFixed(2));
    setDegradation(deg.toFixed(2));
    setLost(loose.toFixed(2));
  };

  return (
    <>
      <div className="calc-form">
        <form onSubmit={handleSubmit}>
          <TeslaImage selectedOption={selectedOption} />
          <label>Select Tesla Model</label>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value={"/"}>Select Model</option>
            <option value="315">Model 3 Performance</option>
            <option value="358">Model 3 Long Range up to 2022</option>
            <option value="333">Model 3 Long Range Models 2023 & Up</option>
            <option value="272">Model 3 Standard Range</option>
            <option value="330">Model Y Long Range</option>
            <option value="303">Model Y Performance</option>
            <option value="405">Model S Dual Motor All-Wheel Drive</option>
            <option value="396">Model S Tri Motor All-Wheel Drive</option>
            <option value="348">Model X Dual Motor All-Wheel Drive</option>
            <option value="333B">Model X Tri Motor All-Wheel Drive</option>
          </select>
          <label>Enter Your Current Charge State Percentage</label>
          <input
            type="number"
            placeholder="Enter current charge state"
            value={percentage}
            onChange={calcPercentage}
          />
          <label>Enter Current Mileage</label>
          <input
            type="number"
            placeholder="Enter mileage"
            value={mileage}
            onChange={calcMileage}
          />
          <button type="submit">Calculate Now</button>
        </form>
        <div className="calculations-results">
          <p>Current Full Charge: {fullCharge} Range Miles</p>
          <p>Current Battery State is at: {degradation} %</p>
          <p>Which Means You Lost: {lost} %</p>
        </div>
      </div>
    </>
  );
};

export default Tesla;
