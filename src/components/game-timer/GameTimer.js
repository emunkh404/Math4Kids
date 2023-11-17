import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function GameTimer({ timer }) {
  return (
    <div className="mt-3">
      <h4>Time left: 
        <span className={`badge ${timer <= 10 ? 'bg-danger' : 'bg-secondary'}`}>
          {Math.max(timer, 0)} seconds
        </span>
      </h4>
    </div>
  );
}
