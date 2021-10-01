"use strict";

function playerPlay() {
  return prompt("Choose rock, paper, or scissors");
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  let playerWins;
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        playerWins = "tie";
        break;
      case "paper":
        playerWins = "lose";
        break;
      default:
        playerWins = "win";
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        playerWins = "win";
        break;
      case "paper":
        playerWins = "tie";
        break;
      default:
        playerWins = "lose";
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        playerWins = "lose";
        break;
      case "paper":
        playerWins = "win";
        break;
      default:
        playerWins = "tie";
    }
  }

  let score = 0;
  let message;

  if (playerWins == "win") {
    message = `You win! ${playerSelection} beats ${computerSelection}`;
    score++;
  } else if ((playerWins = "lose")) {
    message = `You lose! ${playerSelection} loses to ${computerSelection}`;
    score--;
  } else {
    message = "You tie!";
  }

  console.log(message);

  return score;
}

function game() {
  let gameScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    roundsPlayed++;
    console.log(`Round ${roundsPlayed}`);
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    gameScore += playRound(playerSelection, computerSelection);
  }

  let winOrLoseMessage = gameScore > 0 ? "You win" : "You lose";
  console.log(`Your score is ${gameScore}. ${winOrLoseMessage}.`);
}
