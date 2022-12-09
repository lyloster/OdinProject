function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);
  switch (choice){
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  var playerSelection_ins = playerSelection.toLowerCase();
  var computerSelection_ins = computerSelection.toLowerCase();
  if (playerSelection_ins === computerSelection_ins) {
    return "It's a draw!";
  } else {
    //paper beats Rock
    //Scissors beats paper
    //rock beats Scissors
    if (playerSelection_ins === "scissors" && computerSelection_ins === "paper" || playerSelection_ins === "paper" && computerSelection_ins === "rock" || playerSelection_ins === "rock" && computerSelection_ins === "scissors") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

function game() {
  var valid_words = ["paper", "rock", "scissors"];
  for (var i = 0; i < 5; ++i) {
    var playerSelection = window.prompt("Pick Rock, Paper, or Scissors.");
    while (playerSelection === null || !valid_words.includes(playerSelection.toLowerCase())) {
      playerSelection = window.prompt("Pick Rock, Paper, or Scissors.");
    }
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}
