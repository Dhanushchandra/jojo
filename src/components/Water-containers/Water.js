import React, { useState, useEffect } from "react";
import "./Water.css";

function Water() {
  return (
    <div>
      <div className="container">
        <div className="circle" id="#circle-water">
          <h1 id="price">92%</h1>
        </div>
        <div className="circle" id="#circle-water">
          <h1 id="cir">92%</h1>
        </div>
        <div className="circle" id="#circle-water">
          <h1>92%</h1>
        </div>
      </div>
    </div>
  );
}

export default Water;
