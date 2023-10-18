// Home.js
import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Game from "../../components/game/Game";

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
