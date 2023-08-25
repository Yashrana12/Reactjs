import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../ModelCom/ModelCom.css";

export default function ModelCom() {
  return (
    <>
      <div className="model mb-36">
        <Container>
          <div className="backg"></div>
          <div className="modelinfo text-white drop-shadow-lg">
            <h5 className="font-semibold tracking-wider">
              A Crown for Every Achievement.
            </h5>
            <h1
              className="text-6xl m-0 
                        sm:text-2xl"
            >
              Watches
            </h1>
            <h1
              className="text-6xl m-0
                        sm:text-2xl"
            >
              Superlative
            </h1>
            <h1
              className="text-6xl mb-2
                        sm:text-2xl"
            >
              edition
            </h1>
            <div
              className="para text-lg font-extrabold pb-3
                        sm:text-sm"
              style={{ width: "35%" }}
            >
              <p>
                Two words – “Superlative Chronometer” – expresses our founding
                desire to do our utmost to continually surpass our own
                achievements.
              </p>
            </div>
            <Link to="/Products">
              <button className="button uppercase font-bold text-base">
                Shop now
              </button>
            </Link>
          </div>
          <div className="absol"></div>
        </Container>
      </div>
    </>
  );
}
