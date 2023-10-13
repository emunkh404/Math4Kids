import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Table from "../table/Table";

export default function Game() {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [randomNums, setRandomNums] = useState([]);

  useEffect(() => {
    // Generate random numbers when the component mounts
    const score = 36; // Replace with the actual score
    const generatedNumbers = generateRandomNumbers(score);
    setRandomNums(generatedNumbers);
  }, []);

  const [showAnswerCells, setShowAnswerCells] = useState(Array(randomNums.length).fill(false));

  const handleInput = (value) => {
    setInputValue(value);

    if (value === randomNums[currentRowIndex].answer.toString()) {
      const updatedShowAnswerCells = [...showAnswerCells];
      updatedShowAnswerCells[currentRowIndex] = true;
      setShowAnswerCells(updatedShowAnswerCells);

      if (currentRowIndex < randomNums.length - 1) {
        setCurrentRowIndex(currentRowIndex + 1);
        setInputValue(""); // Reset the input value after a correct answer
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Enter a number"
      />
      <Table
        currentRowIndex={currentRowIndex}
        showAnswerCells={showAnswerCells}
        randomNums={randomNums}
      />
    </div>
  );
}
