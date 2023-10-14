import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Table from "../table/Table";

export default function Game() {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [randomNums, setRandomNums] = useState([]);
  const [showAnswerCells, setShowAnswerCells] = useState(Array(randomNums.length).fill(false));
  
  // const [showAnswerCells, setShowAnswerCells] = useState(Array(randomNums.length)).fill(false);
  const [timer, setTimer] = useState(60); // 60-second timer
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Indicates whether the game has started
  
  const handleGameTimeout = () => {
    // Handle game timeout here (e.g., show a message)
    resetGame(); // Reset the game
    setGameStarted(false); // Deactivate the game
  };

  useEffect(() => {
    // Generate random numbers when the component mounts
    const score = 36; // Replace with the actual score
    const generatedNumbers = generateRandomNumbers(score);
    setRandomNums(generatedNumbers);
    setShowAnswerCells(Array(generatedNumbers.length).fill(false)); // Initialize showAnswerCells
  }, []);
  

  useEffect(() => {
    // Start the timer when the component mounts
    if (gameStarted) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(countdown); // Stop the timer when it reaches 0
          handleGameTimeout();
        }
      }, 1000); // Update the timer every second

      return () => {
        clearInterval(countdown); // Clean up the interval when the component unmounts
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, gameStarted]);

  const handleInput = (value) => {
    setInputValue(value);

    if (value === randomNums[currentRowIndex].answer.toString()) {
      const updatedShowAnswerCells = [...showAnswerCells];
      updatedShowAnswerCells[currentRowIndex] = true;
      setShowAnswerCells(updatedShowAnswerCells);

      if (currentRowIndex < randomNums.length - 1) {
        setCurrentRowIndex(currentRowIndex + 1);
        setInputValue(""); // Reset the input value after a correct answer
      } else {
        // Game completed, show the "Congratulations" message and reset the game
        setGameCompleted(true);
        setTimer(60); // Reset the timer
        setGameStarted(false); // Deactivate the game
      }
    }
  };

  const resetGame = () => {
    setCurrentRowIndex(0);
    setInputValue("");
    setShowAnswerCells(Array(randomNums.length).fill(false));
    setTimer(60); // Reset the timer
    setGameCompleted(false); // Reset the game completion status
  };


  const startGame = () => {
    setGameStarted(true);
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
            onChange={(event) => handleInput(event.target.value)}
            placeholder="Enter a number"
          />
        </>
      ) : (
        <button onClick={startGame}>START GAME</button>
      )}
      <Table showAnswerCells={showAnswerCells} randomNums={randomNums} /> 
      

    </div>
  );
}
