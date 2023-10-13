import React, { useState } from "react";

export default function GameInput({ onInput, onPrev, onNext, inputValue }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onInput(newValue);
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />     
    </div>
  );
}
