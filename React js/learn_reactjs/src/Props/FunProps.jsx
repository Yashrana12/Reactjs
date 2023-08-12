import React from "react";

function FunProps(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      {/* <h1>{`${props.obj}`}</h1> */}
    </div>
  );
}

export default FunProps;
