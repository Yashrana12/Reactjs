import React, { useState } from "react";

function Project2() {
  let [index, setIndex] = useState(0);
  let arr = ["red", "green", "blue", "orange", "purple"];
  function changeColor() {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <div>
      <h1 style={{ color: arr[index] }}>My Name Is Yash</h1>
      <button onClick={() => changeColor()}>Click me</button>
    </div>
  );
}

export default Project2;
