import React, { useState, useEffect, useRef } from "react";
import Table from "../table/Table";
import CurrentScore from "../current-score/CurrentScore";
import GameTimer from "../game-timer/GameTimer";
import Operation from "../operation/Operation";
import generateRandomNumbers from "../../function/smartFunction";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Game() {
  const [inputValue, setInputValue] = useState("");
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [randomNums, setRandomNums] = useState([]);
  const [type, setType] = useState("add");
  const [correctlyAnswered, setCorrectlyAnswered] = useState(new Set());
  const [isOperationSelected, setIsOperationSelected] = useState(false);

  const inputRef = useRef(null);
  const location = useLocation();
  const { title } = location.state || { title: "Default Title" };

  const getLevel = (title) => {
    const levelMap = {
      "Pre-K": "pre-k",
      Kindergarten: "kinder",
      "First Grade": "first",
      "Second Grade": "second",
      "Third Grade": "third",
      "Fourth Grade": "fourth",
    };
    return levelMap[title.split(" ")[0] + " " + title.split(" ")[1]] || "pre-k";
  };

  const level = getLevel(title);

  useEffect(() => {
    if (activeAnswerIndex === 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeAnswerIndex]);

  useEffect(() => {
    if (!gameStarted || timer === 0 || score === randomNums.length) {
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, timer, score, randomNums.length]);

  const handleInput = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    const currentProblem = randomNums[activeAnswerIndex];
    if (currentProblem && parseInt(newInputValue) === currentProblem.answer) {
      setCorrectlyAnswered((prev) => new Set(prev).add(activeAnswerIndex));
      setActiveAnswerIndex((prevIndex) => prevIndex + 1);
      setInputValue("");
      setScore((prevScore) => prevScore + 1);
    }
  };

  const resetGame = () => {
    setInputValue("");
    setActiveAnswerIndex(0);
    setScore(0);
    setTimer(30);
    setGameStarted(false);
    setIsOperationSelected(false);
    setRandomNums([]);
    setCorrectlyAnswered(new Set());
    setType("add");
  };

  const handleOperationSelect = (selectedOperation) => {
    const operationMapping = {
      "+": "add",
      "-": "sub",
      "*": "mul",
      "/": "div",
    };
    const operationType = operationMapping[selectedOperation] || "add";
    setType(operationType);

    // Instead of calling resetGame, set up a new game here
    setIsOperationSelected(true);
    setRandomNums(generateRandomNumbers(operationType, level, score));
    setGameStarted(false); // or true, depending on your game logic
  };

  const handleStartGame = () => {
    setRandomNums(generateRandomNumbers(type, level, score));
    setGameStarted(true);
  };

  return (
    <div className="container mt-4">
    {/* Centering GameTimer and CurrentScore */}
    <div className="row justify-content-center my-2">
      <div className="col-auto mx-2">
        <GameTimer timer={timer} disabled={score === randomNums.length} />
      </div>
      <div className="col-auto mx-2">
        <CurrentScore score={score} />
      </div>
    </div>
  
    {/* Centering Operation Component */}
    <div className="row justify-content-center my-3">
      <div className="col-auto">
        <span className="operation-title me-2 fs-4">{title}:</span>
        <Operation
          title={title}
          onSelect={handleOperationSelect}
          disabled={isOperationSelected || gameStarted}
        />
      </div>
    </div>
  
    {/* Centering Input Field and Start/Reset Game Button */}
    <div className="row justify-content-center my-3">
      {/* Input Field */}
      <div className="col-md-6 col-lg-4 px-2">
        <input
          className="form-control"
          type="number"
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter a number"
          ref={inputRef}
          disabled={timer === 0 || score === randomNums.length}
        />
      </div>
      {/* Start/Reset Game Button */}
      <div className="col-auto px-2">
        {gameStarted ? (
          <button className="btn btn-danger" onClick={resetGame}>
            Reset Game
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleStartGame}
            disabled={!isOperationSelected}
          >
            START GAME
          </button>
        )}
      </div>
    </div>
  
    {/* Table and GameLevel Components */}
    {gameStarted && (
      <Table
        randomNums={randomNums}
        activeAnswerIndex={activeAnswerIndex}
        operationType={type}
        correctlyAnswered={correctlyAnswered}
      />
    )}
  </div>
  
  );
}
