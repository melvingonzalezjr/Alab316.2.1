const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

window.alert(guessNumber(randomNumber));

function guessNumber(randomNum) {
  let guess = parseInt(window.prompt("Please give me a number from 1-100"));
  console.log(guess);

  let attempt = 1;
  let returnMessage;

  if (!isNaN(guess)) {
    while (/*guess !== randomNum &&*/ attempt < 10) {
      if (guess < randomNum) {
        returnMessage = `Number is higher than your Guess. Please try again! ATTEMPTS LEFT: ${
          10 - attempt
        }`;
        attempt++;
      } else if (guess > randomNum) {
        returnMessage = `Number is lower than your Guess. Please try again! ATTEMPTS LEFT: ${
          10 - attempt
        }`;
        attempt++;
      } else {
        window.prompt(`WINNER!!!`)
        break;
      }
      guess = parseInt(window.prompt(`${returnMessage}`));
      console.log(returnMessage);
      console.log(attempt);
    }
    if (attempt == 10) {window.prompt('You lose. Attempts used up')}
    window.close();
  } 
  else {
    window.prompt("Please enter a valid number")
  }
}

