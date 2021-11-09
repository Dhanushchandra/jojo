import React from "react";
import "./Maindiv.css";
import Charts from "../../Charts/Bitcoin/Bitcoin";
import Water from "../../Water-containers/Water";
import Bitcoindata from "../../Cryp-Infro/Bitcoindata";

function Maindiv() {
  return (
    <div>
      <div className="mainDiv">
        <div className="firstDiv"></div>
        <div className="SecondDiv">
          <Charts />
          <Bitcoindata />
          <Water />
        </div>
      </div>
    </div>
  );
}

export default Maindiv;
