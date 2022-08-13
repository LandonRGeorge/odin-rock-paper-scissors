"use strict";

const rpsMap = {
  rock: {
    imgSrc: "./images/Rock-paper-scissors_(rock).png",
    rules: {rock: 0, paper: -1, scissors: 1},
  },
  paper: {
    imgSrc: "./images/Rock-paper-scissors_(paper).png",
    rules: {rock: 1, paper: 0, scissors: -1},
  },
  scissors: {
    imgSrc: "./images/Rock-paper-scissors_(scissors).png",
    rules: {rock: -1, paper: 1, scissors: 0},
  },
};

let playerSelectionDisplay = document.querySelector('#playerSelectionDisplay')
let computerSelectionDisplay = document.querySelector('#computerSelectionDisplay')
let playerScoreDisplay = document.querySelector('#playerScoreDisplay')
let computerScoreDisplay = document.querySelector('#computerScoreDisplay')
const rpsOptions = document.querySelectorAll(".rps-option");
let playerScore = 0
let computerScore = 0
let rpsButton = document.querySelector('#resetButton')
let gameWinnerDisplay = document.querySelector('#gameWinnerDisplay')
let roundWinnerDisplay = document.querySelector('#roundWinnerDisplay')

rpsButton.addEventListener('click', () => {
  playerScore = 0
  computerScore = 0
  playerScoreDisplay.textContent = '0'
  computerScoreDisplay.textContent = '0'
  computerSelectionDisplay.querySelector('img').setAttribute('src', '')
  playerSelectionDisplay.querySelector('img').setAttribute('src', '')
  gameWinnerDisplay.textContent = ''
  roundWinnerDisplay.textContent = ''
})


function computerPlay() {
  const choices = Object.keys(rpsMap);
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getImgSrc(rps) {
  return rpsMap[rps].imgSrc;
}

function getScore(playerSelection, computerSelection) {
  let score = rpsMap[playerSelection].rules[computerSelection];
  switch (score) {
    case -1:
      computerScore += 1
      computerScoreDisplay.textContent = computerScore
      roundWinnerDisplay.textContent = `Bah, ${playerSelection} loses to ${computerSelection}!`
      break
    case 1:
      playerScore += 1
      playerScoreDisplay.textContent = playerScore
      roundWinnerDisplay.textContent = `Yay, ${playerSelection} beats ${computerSelection}!`
      break
    default:
      roundWinnerDisplay.textContent = "Tie!"
  }

}

function playRound(e) {
  if (playerScore >= 5 || computerScore >= 5) return
  const playerSelection = e.currentTarget.dataset.value
  const computerSelection = computerPlay()
  getScore(playerSelection, computerSelection)
  computerSelectionDisplay.querySelector('img').setAttribute('src', getImgSrc(computerSelection))
  playerSelectionDisplay.querySelector('img').setAttribute('src', getImgSrc(playerSelection))
  if (playerScore === 5) {
    gameWinnerDisplay.textContent = 'Player wins!'
  }
  if (computerScore === 5) {
    gameWinnerDisplay.textContent = 'Computer wins!'
  }

}

rpsOptions.forEach(rpsOption => {
  rpsOption.addEventListener("click", playRound);
})