import React from "react";
import ComBA from "./ComBA";

export default function ComB(props) {
  return (
    <div>
      <h1>ComB</h1>
      <ComBA name={props.name} />
    </div>
  );
}
