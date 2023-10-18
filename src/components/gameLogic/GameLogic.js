import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";

function GameLogic({ onComplete }) {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [randomNums, setRandomNums] = useState([]);
  const [showAnswerCells, setShowAnswerCells] = useState([]);
  const [timer, setTimer] = useState(60);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameTimeout = () => {
    resetGame();
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    const score = 36; // Replace with the actual score
    const generatedNumbers = generateRandomNumbers(score);
    setRandomNums(generatedNumbers);
    setShowAnswerCells(Array(generatedNumbers.length).fill(false));
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      if (timer === 0) {
        clearInterval(countdown);
        handleGameTimeout();
      }

      return () => {
        clearInterval(countdown);
      };
    }
  }, [timer, gameStarted]);

  const handleInput = (value) => {
    setInputValue(value);

    if (value === randomNums[currentRowIndex].answer.toString()) {
      const updatedShowAnswerCells = [...showAnswerCells];
      updatedShowAnswerCells[currentRowIndex] = true;
      setShowAnswerCells(updatedShowAnswerCells);

      if (currentRowIndex < randomNums.length - 1) {
        setCurrentRowIndex(currentRowIndex + 1);
        setInputValue("");
      } else {
        setGameCompleted(true);
        setTimer(60);
        setGameStarted(false);
        onComplete(); // Notify the parent component about game completion
      }
    }
  };

  const resetGame = () => {
    setCurrentRowIndex(0);
    setInputValue("");
    setShowAnswerCells(Array(randomNums.length).fill(false));
    setTimer(60);
    setGameCompleted(false);
  };

  return (
    <div>
      {gameCompleted ? (
        <p>Congratulations! You completed the game.</p>
      ) : gameStarted ? (
        <>
          <p>Time left: {timer} seconds</p>
          <input
            type="number"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter a number"
          />
        </>
      ) : (
        <button onClick={startGame}>START GAME</button>
      )}
    </div>
  );
}

export default GameLogic;
