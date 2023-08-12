import React, { useState } from "react";

export default function FunPropsChange(props) {
  let [changeName, setchangeName] = useState(props.name);

  function changeNameFun() {
    let upperCaseName = changeName?.toUpperCase();

    setchangeName(upperCaseName);
  }

  return (
    <div>
      <h1>{changeName}</h1>
      {/* <h1>{props.name}</h1> */}
      <button onClick={() => changeNameFun()}>TO change Name</button>
    </div>
  );
}
