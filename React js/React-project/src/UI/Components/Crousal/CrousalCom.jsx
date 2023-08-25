import React from "react";
import { Link } from "react-router-dom";
import "../Crousal/CrousalCom.css";

export default function CrousalCom() {
  return (
    <>
      <div className="home">
        <div className="container p-0 fort-normal lg">
          <div className="innerhome">
            <h6 className="font-medium text-lg sm:text-xs">
              Moonsoon offer is live
            </h6>
            <h6 className="text-6xl pb-4 content">
              Discover Our Perpetual Initiatives{" "}
            </h6>
            <Link to="/singUp">
              <button className="button uppercase font-semibold">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
