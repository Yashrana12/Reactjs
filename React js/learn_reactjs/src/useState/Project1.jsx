import React, { useState } from "react";

function Project1() {
  let [textColor, setTextColor] = useState("red");

  function ChangeColor() {
    setTextColor("blue");
  }
  return (
    <div>
      <h1 style={{ color: textColor }}>My Name Is Yash</h1>
      <button onClick={() => ChangeColor()}> Click Me</button>
    </div>
  );
}

export default Project1;
