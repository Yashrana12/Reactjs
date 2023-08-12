import React from "react";

export default function ConInputPro(props) {
  if (props.isInp) {
    return (
      <>
        <label htmlFor="pass">Password :</label>
        <input type="password" name="" id="pass" />
      </>
    );
  } else if (props.isColor) {
    return (
      <>
        <label htmlFor="color">Color :</label>
        <input type="color" name="" id="color" />
      </>
    );
  } else if (props.isEmail) {
    return (
      <>
        <label htmlFor="mail">Email :</label>
        <input type="email" name="" id="mail" />
      </>
    );
  } else if (props.isNo) {
    return (
      <>
        <label htmlFor="no">Number :</label>
        <input type="number" name="" id="no" />
      </>
    );
  } else {
    return (
      <>
        <label htmlFor="text">Text :</label>
        <input type="text" name="" id="text" />
      </>
    );
  }
}
