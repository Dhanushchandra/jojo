import React from "react";
import "./Maindiv.css";
import Charts from "../../Charts/Bitcoin/Bitcoin1";

function Maindiv() {
  return (
    <div>
      <div className="mainDiv">
        <div className="firstDiv"></div>
        <div className="SecondDiv">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default Maindiv;
