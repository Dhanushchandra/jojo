import React from "react";
import "./Maindiv.css";
import Charts from "../../Charts/Bitcoin/Bitcoin";

function Maindiv() {
  return (
    <div>
      <div className="mainDiv">
        <div className="firstDiv"></div>
        <div className="SecondDiv">
          <Charts />
          text can be given here
        </div>
      </div>
    </div>
  );
}

export default Maindiv;
