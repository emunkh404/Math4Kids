import React from 'react';
import './Input.css';

export default function Input({ value, onChange }) {
  return (
    <div className="input-container">
      <input
       type="number"
       id="user-input"
       placeholder="Type here"
       className="custom-input"
       value={value}
       onChange={onChange}
      />
    </div>
  );
}
