const hands = ["rock", "paper", "scissor"];

function play(playerSelection, computerSelection) {
  playerSelection = prompt("Rock paper or scissor?").toLowerCase();
  computerSelection = function computerPlay() {
    return hands[Math.floor(Math.random() * hands.length)];
  };
}
