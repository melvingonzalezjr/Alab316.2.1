const app = document.getElementById("app");
// const gamebox = document.createElement("table")

const randomNumber = Math.trunc(Math.random() * 100 + 1); //random gives num 0->1. Trunc gives us just the int
console.log(randomNumber);

//Create prompt for user to guess
let guess;
let output = "";
// setTimeout(() => {
//     console.log('This is a filler message');

// }, 2000);
event.typ

window.alert("Welcome! Please guess a number between 1-100");

do {
  guess = parseInt(window.prompt("Pick a number between 1-100"));
  if (randomNumber === guess) {
    output = "You're such a smart cookie";
  } else {
    output = `Sorry the random number was ${randomNumber}. Try again`;
  }
  window.alert(output);
} while (randomNumber != guess);
