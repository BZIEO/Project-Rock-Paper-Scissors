//Variables//
const choices = ["rock", "paper", "scissor"];

//Function to prompt user to select RPS//
function promptUser() {
  return prompt("rock, paper, scissor, shoot...").toLowerCase();
}

//Function to randomly return RPS//
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//Function to play & the various outcomes//
function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again to win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lost! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You lost! Paper loses to scissors.";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You lost! Rock beats scissors";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You won! Scissor cuts paper;";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You won! Rock beats scissors";
  } else {
    return "Error!! Please enter rock 🪨, paper 📄, or scissor ✂️";
  }
}

//Function to play 5 rounds + keeping score + choosing winner in the end//
function playGame() {
  //local variables for the function//
  let computerWins = 0;
  let userWins = 0;
  let decision;
  // for loop to play round 5 times//
  for (i = 0; i < 5; i++) {
    let computerSelection = computerPlay();

    let playerSelection = promptUser();

    let outcome = play(playerSelection, computerSelection);
    // IF Statement to tally score//
    if (outcome.includes("won")) {
      userWins++;
    } else if (outcome.includes("lost")) {
      computerWins++;
    }
    //IF Statement to choose winner after tallying up the score//
    if (userWins > computerWins) {
      decision = `Player won ${userWins} times and Computer won ${computerWins} times, Player wins the game!`;
    } else if (userWins < computerWins) {
      decision = `Player won ${userWins} times and Computer won ${computerWins} times, Computer wins the game!`;
    } else {
      decision = `Player won ${userWins} times and Computer won ${computerWins} times, Player and computer are tied!`;
    }
    //Tally and return outcome after every round//
    console.log(outcome);
    console.log("User Wins: " + userWins + ", Computer Wins: " + computerWins);
  }
  //Return final decision//
  console.log(decision);
}
