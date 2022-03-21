//Variables//
const choices = ["rock", "paper", "scissor"];
let playerSelection = prompt("Rock, paper, or scissor?").toLowerCase();

const computerSelection = computerPlay();

//Function to randomly return RPS//
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//Function to play//
function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again to win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lost! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lost! Paper loses to scissors.";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return " You lost! Rock beats scissors";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You won! Scissor cuts paper;";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You won! Rock beats scissors";
  }
}

//Function to play 5 rounds//
function game() {
  for (let i = 0; i < 5; i++) {
    play();
  }
}

console.log(play(playerSelection, computerSelection));
