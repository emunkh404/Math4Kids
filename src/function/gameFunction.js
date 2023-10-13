import React from 'react'
import generateRandomNumbers from "./generateRandomNumbers";

//this is a Context component
export default function gameFunction() {

// timer is 60 seconds that stop this game, when time up call score calculetor function.
function startGame() {
    let timeLeft = 60; // Initial time in seconds
      
    const timerInterval = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timerInterval); // Stop the timer when time is up
        scoreCalculator(); // Call score calculator function here
      } else {
       
        timeLeft--;
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
  

  
  // Call startGame to begin the game with a 60-second timer
  startGame();
  
// generate random number of digits based on score upto 50 points
    // if score less than 70% of 50 points generate 1 digit 
    // if score more than or equal 70% of 50 points generate 2 digits so, on util 7 digits

  
  // Example usage:
  const score = 35; // Replace with the actual score
  const randomNum = generateRandomNumbers(score);
  console.log(`Random number: ${randomNum}`);
// each problem solve one point
// if complete 70% or more of 50 points level up that increase number of digits like current digit 1 then 12
function scoreCalculator() {
    
}

// score calculetor
// score holder
// qualify next level
// replay game
// playlist
// random quize
// quize stats


  return (
    <div>
      
    </div>
  )
}
