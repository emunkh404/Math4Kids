const generateRandomNumbers = (type, level, score) => {
  
  switch (type) {
    case "div":
      // Modify the logic to generate var1 % var2 === 0
      return generateDivisionNumbers(level, score);

    case "sub":
      // Modify the logic to generate var1 > var2
      return generateSubtractionNumbers(level, score);

    case "mul":
      // Add your logic for the "mul" case here
      return generateMultiplicationNumbers(level, score);

    default:
      // Add your logic for the default case (add math) here
      return generateAdditionNumbers(level, score);
  }
};

// Helper function to generate division numbers
function generateDivisionNumbers(level, score) {
  // Implement logic to generate var1 % var2 === 0
  let maxNumber;
  // Implementing a basic level-based difficulty
  switch (level) {
    case "pre-k":
    case "kinder":
      maxNumber = 10;
      break;
    case "first":
    case "second":
      maxNumber = 20;
      break;
    case "third":
    case "fourth":
      maxNumber = 50;
      break;
    default:
      maxNumber = 10;
      break;
  }

  let result = [];
  for (let i = 0; i < 10; i++) {
    let var2 = Math.floor(Math.random() * maxNumber) + 1; // ensure non-zero divisor
    let var1 = var2 * (Math.floor(Math.random() * maxNumber) + 1);
    result.push({
      var1,
      var2,
      answer: var1 / var2,
    });
  }

  return result;
}

// Helper function to generate subtraction numbers
function generateSubtractionNumbers(level, score) {
  // Implement logic to generate var1 > var2
  // ...
}

// Helper function to generate multiplication numbers
function generateMultiplicationNumbers(level, score) {
  // Implement logic for the "mul" case
  // ...
}

// Helper function to generate addition numbers (default case)
function generateAdditionNumbers(level, score) {
  const maxScore = 10;
  const percentageThreshold = 0.7;
  let numDigits;

  switch (level) {
    case "pre-k":
      numDigits = 1;
      break;

    case "kinder":
      numDigits = 1;
      break;

    case "first":
      if (score < percentageThreshold * maxScore) {
        numDigits = 1;
      } else {
        numDigits =
          1 + Math.floor((score - percentageThreshold * maxScore) / 5);
      }
      break;

    case "second":
      if (score < percentageThreshold * maxScore) {
        numDigits = 1;
      } else {
        numDigits =
          1 + Math.floor((score - percentageThreshold * maxScore) / 5);
      }
      break;

    case "third":
      if (score < percentageThreshold * maxScore) {
        numDigits = 2;
      } else {
        numDigits =
          1 + Math.floor((score - percentageThreshold * maxScore) / 5);
      }
      break;

    case "fourth":
      if (score < percentageThreshold * maxScore) {
        numDigits = 2;
      } else {
        numDigits =
          1 + Math.floor((score - percentageThreshold * maxScore) / 5);
      }
      break;

    default:
      // Default to one-digit addition if the level is not recognized
      numDigits = 1;
      break;
  }

  // Ensure that numDigits doesn't exceed 7 filtered to a maximum of 7 digits
  numDigits = Math.min(numDigits, 7);

  // Generate a random number with the specified number of digits
  const minNumber = Math.pow(10, numDigits - 1);
  const maxNumber = Math.pow(10, numDigits) - 1;

  let result = [];

  for (let i = 0; i < 10; i++) {
    const var1 =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const var2 =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    result.push({
      var1,
      var2,
      answer: var1 + var2,
    });
  }

  return result;
}

// const score = 0; // Replace with the actual score from DB
// const level = "fourth";
// console.log(generateAdditionNumbers(level, score));
export default generateRandomNumbers;