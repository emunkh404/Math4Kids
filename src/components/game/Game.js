import React, { useState, useEffect, useRef } from "react";
import Table from "../table/Table";
import CurrentScore from "../current-score/CurrentScore";
import GameTimer from "../game-timer/GameTimer";

export default function Game({
  timer,
  randomNums,
  gameStarted,
  setGameStarted,
  isRetry
}) {
  const [inputValue, setInputValue] = useState("");
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0); // Initialize the score state

  const inputRef = useRef(null);

  useEffect(() => {
    if (activeAnswerIndex === 0) {
      inputRef.current.focus();
    }
  }, [activeAnswerIndex]);

  useEffect(() => {
    if(isRetry){
      setCorrectAnswers([]);
      setScore(0);
    }
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
  }, [inputValue, randomNums, activeAnswerIndex, correctAnswers, isRetry]);

  return (
    <div>
      <GameTimer timer={timer} />
      <CurrentScore score={score} />.
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
        <Table
          randomNums={randomNums}
          correctAnswers={correctAnswers}
          activeAnswerIndex={activeAnswerIndex}
        />
      ) : null}

      {score === randomNums.length && timer > 0 ? <p>Winner</p> : null}
    </div>
  );
}
