import React, { useState } from "react";
import "./Input.css";

export default function InputCom() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

  // to get input value
  function getDate(e) {
    setName(e.target.value);
  }

  //  to add inptu value to array
  function addData() {
    setArr([...arr, name]);
    setName("");
  }
  return (
    <>
      <div className="intDiv">
        <label htmlFor="name">Name :</label>
        <input
          onChange={(e) => getDate(e)}
          type="text"
          value={name}
          id="name"
          placeholder="Please enter your name"
        />
        <button onClick={() => addData()} variant="primary">
          Add Name
        </button>
      </div>
      {arr.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
