import React, { useState } from "react";
import Balloon from "../balloon/Balloon";
import generateRandomNumbers from "../../function/generateRandomNumbers";

const balloonColors = ["red", "blue", "green", "yellow"];

export default function Game() {
  const [poppedBalloons, setPoppedBalloons] = useState([]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [isAnswerMatched, setIsAnswerMatched] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const score = 36; // Replace with the actual score
  const randomNums = generateRandomNumbers(score); // Define your score and random numbers generation

  const handlePop = (color) => {
    setPoppedBalloons((poppedBalloons) => [...poppedBalloons, color]);
  };

  const handleInput = (value) => {
    setInputValue(value);
  };

  const handlePrev = () => {
    if (currentRowIndex > 0) {
      setCurrentRowIndex(currentRowIndex - 1);
    }
  };

  const handleNext = () => {
    if (inputValue === randomNums[currentRowIndex].answer.toString()) {
      if (currentRowIndex < randomNums.length - 1) {
        setCurrentRowIndex(currentRowIndex + 1);
        setInputValue(""); // Reset the input value after a correct answer
      }
      setIsAnswerMatched(true);
    } else {
      setIsAnswerMatched(false);
    }
  };

  const handleNextTableRow = () => {
    if (currentRowIndex < randomNums.length - 1) {
      setCurrentRowIndex(currentRowIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleNext}>Next</button>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {randomNums.map((row, index) => (
            <tr key={index}>
              <td>{`${row.var1} + ${row.var2}`}</td>
              <td
                className={`table ${
                  index === currentRowIndex
                    ? isAnswerMatched
                      ? ""
                      : "hidden"
                    : ""
                }`}
              >
                {isAnswerMatched ? row.answer : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleNextTableRow}>Next Row</button>
      <h1>Find the right EGG:</h1>
      <div className="balloon-container">
        {balloonColors.map((color) => (
          <Balloon
            key={color}
            color={color}
            onClick={() => handlePop(color)}
            popped={poppedBalloons.includes(color)}
          />
        ))}
      </div>
    </div>
  );
}
