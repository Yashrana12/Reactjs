import React from "react";
import ComBB from "./ComBB";

export default function ComBA(props) {
  return (
    <div>
      <h1>ComBA</h1>
      <ComBB name={props.name} />
    </div>
  );
}
