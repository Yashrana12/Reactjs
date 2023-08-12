import React from "react";
// import FunProps from "../Props/FunProps";

export default function MapKey() {
  let arr = ["Yash", "Meet", "Nihar", "Vinod"];
  return (
    <>
      {arr.map((e, i) => {
        // return <FunProps />;
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
