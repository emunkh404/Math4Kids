const generateRandomNumbers = (score) => {
  const maxScore = 50;
  const percentageThreshold = 0.7;
  let numDigits;
 
  if (score < percentageThreshold * maxScore) {
    // NOT qualified for 70% and above score
    numDigits = 1;
  } else {
    numDigits = 1 + Math.floor((score - percentageThreshold * maxScore) / 5);
    // qualified for 70% and above score
  }

  // Ensure that numDigits doesn't exceed 7 filtered to a maximum of 7 digits
  numDigits = Math.min(numDigits, 7);

  // Generate a random number with the specified number of digits
  const minNumber = Math.pow(10, numDigits - 1);
  const maxNumber = Math.pow(10, numDigits) - 1;

  let result = [];

  for (let i = 0; i < 30; i++) {
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
};

export default generateRandomNumbers;

