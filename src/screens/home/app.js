import React, { useState, useEffect } from "react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60); // Initialize the timer with 60 seconds

  useEffect(() => {
    let interval;

    if (gameStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Decrease the timer by 1 second every second
    } else if (timer === 0) {
      // Handle game over or timer completion here
      clearInterval(interval);
      setGameStarted(false);
    }

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [gameStarted, timer]);

  // Rest of your component code...

  return (
    <div>
      {/* Your UI code */}
    </div>
  );
}
