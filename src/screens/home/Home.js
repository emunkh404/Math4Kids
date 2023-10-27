import React, { useState, useEffect } from "react";
// import generateRandomNumbers from "../../function/generateRandomNumbers";
import generateRandomNumbers from "../../function/smartFunction";
import Game from "../../components/game/Game";
import NavUser from "../../components/nav-user/NavUser";

const score = 28; // Replace with the actual score from DB
const level = "fourth"; 

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [randomNums, setRandomNums] = useState([]);
  const [isRetry, setIsRetry] = useState(false);

  useEffect(() => {
    const generatedNumbers = generateRandomNumbers(level, score);
    setRandomNums(generatedNumbers);
  }, [level, score]);

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

  const startNewGame = () => {
    setIsRetry(false);
    setRandomNums(generateRandomNumbers(score)); // Generate new random numbers
    setGameStarted(true);
    setTimer(60);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setTimer(60);
    setIsRetry(false); // Reset the retry state
  };

  const handleRetry = () => {
    startNewGame()
  };

  return (
    <div>
      <NavUser />
      <Game
        timer={timer}
        randomNums={randomNums}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        isRetry={isRetry}
      />
      <div>
        {gameStarted && !isRetry ? (
          <button onClick={handleRetry}>RETRY</button>
        ) : (
          <button onClick={handleStartGame}>START GAME</button>
        )}
      </div>
    </div>
  );
}
