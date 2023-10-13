import React from "react";
import './Button.css';

export default function Button({ name, func }) {
  return (
    <button className="custom-button" onClick={func}>
      {name}
    </button>
  );
}
