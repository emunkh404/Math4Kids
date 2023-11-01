import React, { useState, useEffect, useRef } from "react";
import Table from "../table/Table";
import CurrentScore from "../current-score/CurrentScore";
import GameTimer from "../game-timer/GameTimer";
import GameLevel from "../game-level/GameLevel";
import generateRandomNumbers from "../../function/smartFunction";



export default function Game({level, type}) {
  const [inputValue, setInputValue] = useState("");
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameStarted, setGameStarted] = useState(false); 
  const [randomNums, setRandomNums] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (activeAnswerIndex === 0) {
      inputRef.current.focus();
    }
  }, [activeAnswerIndex]);

  useEffect(() => {
    let interval;
  
    if (gameStarted && timer > 0 && score < randomNums.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Decrease the timer by 1 second every second
    } else if (timer === 0 || score === randomNums.length) {
      // Handle game over or timer completion here
      clearInterval(interval);
      setGameStarted(false);
    }
  
    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [gameStarted, timer, score, randomNums.length]);
  

  useEffect(() => {
    if (activeAnswerIndex >= 0 && activeAnswerIndex < randomNums.length) {
      const activeAnswer = randomNums[activeAnswerIndex];
      if (parseInt(inputValue) === activeAnswer.answer) {
        const updatedCorrectAnswers = [...correctAnswers];
        updatedCorrectAnswers[activeAnswerIndex] = true;
        setCorrectAnswers(updatedCorrectAnswers);
        setActiveAnswerIndex((prevIndex) =>
          prevIndex < randomNums.length - 1 ? prevIndex + 1 : prevIndex
        );
        setInputValue("");
        setScore((prevScore) => prevScore + 1);
      }
    }
  }, [inputValue, randomNums, activeAnswerIndex, correctAnswers]);

  const resetGame = () => {
    setRandomNums([]);
    setInputValue("");
    setActiveAnswerIndex(0);
    setCorrectAnswers([]);
    setScore(0);
    setTimer(60);
    setGameStarted(false);
  };
  
  const startNewGame = () => {
    // Call the resetGame function to ensure a complete game reset
    resetGame();
  
    // Generate new random numbers and start the game
    const newRandomNums = generateRandomNumbers(type, level, score);
    setRandomNums(newRandomNums);
    setGameStarted(true);
  };
  
  

  const handleStartGame = () => {
    startNewGame();
  };
  
  return (
    <div>
      <GameTimer timer={timer} disabled={score === randomNums.length} />
      <CurrentScore score={score} />
      <input
        className="active-input"
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter a number"
        ref={inputRef}
        disabled={timer === 0 || score === randomNums.length}
      />
     
      {gameStarted ? (
        <>
        <button onClick={handleStartGame}>Reset Game</button>
          <Table
            randomNums={randomNums}
            correctAnswers={correctAnswers}
            activeAnswerIndex={activeAnswerIndex}
          />
          <GameLevel />
        </>
      ) : <button onClick={handleStartGame}>START GAME</button>}
    </div>
  );
}
