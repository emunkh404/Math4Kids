import React, { useState } from "react";
import "./Balloon.css";

function Balloon({ color, onClick, popped }) {
  return (
    <div className="balloon-container">
      <div
        className={`balloon ${color} ${popped ? "pop" : ""}`}
        onClick={onClick}
        style={{fontSize: "15px", textAlign: "center"}}
      >
         <span className="balloon-text">{popped ? "X" : "?"}</span>
      </div>
    </div>
  );
}

export default Balloon;
