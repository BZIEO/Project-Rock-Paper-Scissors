//Variables//
const choices = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const para = document.createElement("p");
const para1 = document.createElement("p");

//Variables to keep score//
let computerWins = 0;
let userWins = 0;

//Appended children to announce who win/keep score
results.appendChild(para);
score.appendChild(para1);

//Function to randomly return RPS//
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play & the various outcomes//
function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    para.textContent = "It's a tie! Try again to win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    para.textContent = `You lost! Paper beats rock.`;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    para.textContent = "You lost! Paper loses to scissors.";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    para.textContent = "You lost! Rock beats scissors";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    para.textContent = "You won! Scissor cuts paper.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    para.textContent = "You won! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    para.textContent = "You won! Rock beats scissors";
  } else {
    para.textContent = "Error!! Please enter rock 🪨, paper 📄, or scissor ✂️";
  }
}

//Once clicked, will start the game
buttons.forEach((button) => button.addEventListener("click", logText));

//Function invoked when user clicks on a RPS button
function logText(e) {
  let playerSelection = this.classList.value;
  let computerSelection = computerPlay();
  document.querySelector("#choose").textContent = "";
  play(playerSelection, computerSelection);
  if (para.textContent.includes("won")) {
    userWins++;
  } else if (para.textContent.includes("lost")) {
    computerWins++;
  }
  para1.textContent =
    "User wins: " + userWins + ", Computer wins: " + computerWins;
  if (computerWins === 5) {
    // para1.textContent = "Computer has 5 points, computer wins!";
    // document.querySelector(".content").style.backgroundColor = "red";
    userWins = 0;
    computerWins = 0;
  } else if (userWins === 5) {
    para1.textContent = "User has 5 points, user wins!";
    // document.querySelector(".content").style.backgroundColor = "Green";
    userWins = 0;
    computerWins = 0;
  }
}
