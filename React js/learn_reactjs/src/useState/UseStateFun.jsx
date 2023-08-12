import React, { useState } from "react";

function UseStateFun() {
  let [num, SetNum] = useState(0);
  function countNo() {
    SetNum(num + 1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => countNo()}>click me</button>
    </div>
  );
}

export default UseStateFun;
