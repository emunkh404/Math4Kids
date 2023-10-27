import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../../function/generateRandomNumbers";
import Game from "../../components/game/Game";
import NavUser from "../../components/nav-user/NavUser";


const score = 15; // Replace with the actual score

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [randomNums, setRandomNums] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);


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
  };

  return (
    <div>
    <NavUser />
    {gameStarted ? (
      <Game timer={timer} randomNums={randomNums} />
    ) : (
      <div>
        <button onClick={handleStartGame} disabled={timer === 0}>
          START GAME
        </button>
      </div>
    )}
    {timer === 0 && correctAnswers.length < score && (
      <div>
        <p>GAME OVER</p>
        <button onClick={handleStartGame}>RETRY</button>
      </div>
    )}
    {correctAnswers.length === score && (
      <div>
        <p>WINNER!</p>
        <button onClick={handleStartGame}>RETRY</button>
      </div>
    )}
  </div>
  );
}
// if user click START GAME button Game will start and timer will count down, and hide the START GAME button
// if user collect 30 points score /generatedNumbers.length is 30/ before timer (timer === 0) 
// show winner message, show START GAME button
// if user cannot collect 30 points score /generatedNumbers.length is 30/ before timer (timer === 0) 
// show game over message, show START GAME button