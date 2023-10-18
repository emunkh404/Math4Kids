import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Game from "../../components/game/Game";

const score = 36; // Replace with the actual score

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60); // Manage the timer here
  const [randomNums, setRandomNums] = useState([]);

  useEffect(() => {
    const generatedNumbers = generateRandomNumbers(score);
 
    setRandomNums(generatedNumbers);
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);

    // Start the timer
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(countdown);
        setGameStarted(false); // Deactivate the game
        // Handle game timeout or completion if needed
      }
    }, 1000);
  };


  return (
    <div>
        <p>Time left: {timer} seconds</p>
      {gameStarted ? (
        <Game timer={timer} randomNums={randomNums}/>
      ) : (
        <button onClick={handleStartGame}>START GAME</button>
      )}
    </div>
  );
}
