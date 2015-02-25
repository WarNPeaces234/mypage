function generateRandomNumber() {
  return Math.random(1);
  
}

function checkGuess(guess, generatedRandomNumber) {
  // Do not change these two lines
  var statusCode= 0;
  var statusMessage= "Guessed Correctly";

  

  // Do not change this line
  return { "statusCode": statusCode, "statusMessage": statusMessage };
}
