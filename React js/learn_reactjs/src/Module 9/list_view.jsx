import React from "react";

function ListView() {
  return (
    <>
      <div
        className="main"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "magenta",
          textAlign: "center",
        }}
      >
        <div className="marr" style={{ margin: "0px 400px" }}>
          <div className="padd" style={{ padding: "250px 0px" }}>
            <div className="inp d-flex justify-content-center align-items-center gap-2">
              <input type="checkbox" name="" id="map" />
              <label
                htmlFor="map"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Use Array.Map
              </label>
            </div>
            <div className="inp d-flex justify-content-center align-items-center gap-2">
              <input type="checkbox" name="" id="loop" />
              <label
                htmlFor="loop"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Not a for loop
              </label>
            </div>
            <div className="inp d-flex justify-content-center align-items-center gap-2">
              <input type="checkbox" name="" id="uni" />
              <label
                htmlFor="uni"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Give a Each item unique key
              </label>
            </div>
            <div className="inp d-flex justify-content-center align-items-center gap-2">
              <input type="checkbox" name="" id="avd" />
              <label
                htmlFor="avd"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                Avoid using array index as the key
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListView;
