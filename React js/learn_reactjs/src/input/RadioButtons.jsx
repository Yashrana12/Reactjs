import { useState } from "react";

export default function RadioButtons() {
  let [selectedGander, setSelectedGander] = useState("male");

  function selectGander(e) {
    setSelectedGander(e.target.value);
  }

  return (
    <>
      <form>
        <div className="radio d-inline">
          <input
            type="radio"
            value="male"
            name="gander"
            id="male"
            checked={selectedGander === "male"}
            onChange={(e) => selectGander(e)}
          />
          <label htmlFor="male">Male</label>
        </div>
        {"  "}
        <div className="radio d-inline">
          <input
            type="radio"
            value="female"
            name="gander"
            id="female"
            checked={selectedGander === "female"}
            onChange={(e) => selectGander(e)}
          />
          <label htmlFor="female">Female</label>
        </div>
        {"  "}
        <div className="radio d-inline">
          <input
            type="radio"
            value="other"
            name="gander"
            id="other"
            checked={selectedGander === "other"}
            onChange={(e) => selectGander(e)}
          />
          <label htmlFor="other">Others</label>

          <p>
            Select Gander <strong>{selectedGander}</strong>
          </p>
        </div>
      </form>
    </>
  );
}
