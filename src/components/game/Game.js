import React, { useState, useEffect } from "react";
import Table from "../table/Table";

export default function Game({ timer, randomNums }) {
  const [inputValue, setInputValue] = useState("");
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    if (activeAnswerIndex >= 0 && activeAnswerIndex < randomNums.length) {
      const activeAnswer = randomNums[activeAnswerIndex];
      if (parseInt(inputValue) === activeAnswer.answer) {
        setCorrectAnswer(parseInt(inputValue));
        setActiveAnswerIndex((prevIndex) =>
          prevIndex < randomNums.length - 1 ? prevIndex + 1 : prevIndex
        );
        setInputValue(""); // Clear the input for the next answer
      }
    }
  }, [inputValue, randomNums, activeAnswerIndex]);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter a number"
      />
      <Table
        randomNums={randomNums}
        correctAnswer={correctAnswer}
        activeAnswerIndex={activeAnswerIndex}
      />
    </div>
  );
}
