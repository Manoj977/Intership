let playerValue;
let randomValue = Math.floor(Math.random() * 10 + 1);
let condition = true;
while (condition == true) {
  playerValue = parseInt(prompt("Enter your Guess Number:"));
    if (playerValue < randomValue) {
      console.log("Guess Number is Low");
    }
    if (playerValue > randomValue) {
      console.log("Guess Number is High");
    }
    if (playerValue === randomValue) {
      console.log("You Won");
      break;
    }
  }
  condition = false;
