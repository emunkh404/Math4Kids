// Home.js
import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Game from "../../components/game/Game";
import NavUser from "../../components/nav-user/NavUser";

// const score = 36; // Replace with the actual score

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [randomNums, setRandomNums] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const generatedNumbers = generateRandomNumbers(score);
    setRandomNums(generatedNumbers);
  }, [score]);

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

  const handleStartGame = () => {
    setGameStarted(true);
    setCorrectAnswers([]);
    setTimer(60);
    setScore(0);
  };

  const handleGameCompletion = (correctAnswers) => {
    setGameStarted(false);
    const newScore = correctAnswers.filter(Boolean).length;
    setScore(newScore + score); // Increment the score by the new score
  };

  return (
    <div>
      <NavUser/>
      <p>Time left: {Math.max(timer, 0)} seconds</p>
      <p>SCORE: {score}</p>
      {gameStarted ? (
        <Game
          timer={timer}
          randomNums={randomNums}
          onGameCompletion={handleGameCompletion}
        />
      ) : (
        <button onClick={handleStartGame} disabled={timer === 0}>
          {timer === 0 ? "Game Over" : "START GAME"}
        </button>
      )}
      {timer === 0 && correctAnswers.length === score && (
        <p>WINNER!</p>
      )}
    </div>
  );
}
