import React, { useState } from "react";
import "./CarInput.css";

export default function CarInput() {
  let [carName, setCarName] = useState("");
  let [carArr, setCarArr] = useState([]);

  function getCarData(e) {
    setCarName(e.target.value);
  }

  function addCardata() {
    setCarArr([...carArr, carName]);
    setCarName("");
  }
  return (
    <>
      <div className="intDiv">
        <label htmlFor="cars">Car Name :</label>
        <input
          type="text"
          onChange={(e) => getCarData(e)}
          value={carName}
          id="cars"
          placeholder="please enter your car name"
        />
        <button onClick={() => addCardata()} variant="dark">
          Add Car
        </button>
      </div>
      {carArr.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
