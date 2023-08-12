import { useState } from "react";
import Button from "react-bootstrap";
import "./ColorInput.css";

export default function ColorInput() {
  let [colorName, setColorName] = useState("");
  let [colorArr, setColorArr] = useState([]);

  function getColorData(e) {
    setColorName(e.target.value);
  }

  function addColordata() {
    setColorArr([...colorArr, colorName]);
    setColorName("");
  }
  return (
    <>
      <div className="intDiv">
        <label htmlFor="colors">Colors :</label>
        <input
          type="text"
          onChange={(e) => getColorData(e)}
          value={colorName}
          id="colors"
          placeholder="please enter your color name"
        />
        {/* <Button onClick={() => addColordata()} variant="info">
          Primary
        </Button> */}
        <Button onClick={() => addColordata()} variant="primary">
          Primary
        </Button>
      </div>
      {colorArr.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
