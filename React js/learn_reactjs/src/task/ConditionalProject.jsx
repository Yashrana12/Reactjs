import React from "react";

export default function ConditionalProject(props) {
  if (props.isInput) {
    return (
      <>
        <label htmlFor="mail">Email :</label>
        <input type="emile" name="" id="mail" />
      </>
    );
  } else {
    return (
      <>
        <label htmlFor="no">Number :</label>
        <input type="number" name="" id="no" />
      </>
    );
  }
}
