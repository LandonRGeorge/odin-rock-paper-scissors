"use strict";

const rpsMap = {
  rock: {
    imgSrc: "./images/Rock-paper-scissors_(rock).png",
    rules: { rock: 0, paper: -1, scissors: 1 },
  },
  paper: {
    imgSrc: "./images/Rock-paper-scissors_(paper).png",
    rules: { rock: 1, paper: 0, scissors: -1 },
  },
  scissors: {
    imgSrc: "./images/Rock-paper-scissors_(scissors).png",
    rules: { rock: -1, paper: 1, scissors: 0 },
  },
};

function playerPlay() {
  return prompt("Choose rock, paper, or scissors");
}

function computerPlay() {
  const choices = Object.keys(rpsMap);
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getImgSrc(rps) {
  return rpsMap[rps].imgSrc;
}

function getScore(playerSelection, computerSelection) {
  return rpsMap[playerSelection].rules[computerSelection];
}

function getTextualScore(score) {
  switch (score) {
    case -1:
      return "You lose!";
      break;
    case 1:
      return "You win!";
      break;
    default:
      return "Tie!";
  }
}

function createRpsSelectionElement(rps) {
  const div = document.createElement("div");
  div.classList.add("rps");
  div.classList.add("rps-selection");
  const img = document.createElement("img");
  const imgSrc = getImgSrc(rps);
  img.setAttribute("src", imgSrc);
  div.appendChild(img);
  return div;
}

function createRpsRoundElement(
  playerSelection,
  computerSelection,
  textualScore
) {
  const rounds = document.querySelector(".rps-rounds");
  const round = document.createElement("div");
  const roundContainer = document.createElement("div");
  roundContainer.classList.add("col");
  roundContainer.classList.add("round-container");
  round.classList.add("rps-round");
  round.classList.add("row");
  const player = createRpsSelectionElement(playerSelection);
  const computer = createRpsSelectionElement(computerSelection);
  const score = document.createElement("p");
  score.innerText = textualScore;
  round.appendChild(player);
  round.appendChild(computer);
  roundContainer.append(round);
  roundContainer.appendChild(score);
  rounds.appendChild(roundContainer);
}

function playRound(e) {
  const playerSelection = e.target.parentElement.id;
  const computerSelection = computerPlay();
  const score = getScore(playerSelection, computerSelection);
  const textualScore = getTextualScore(score);
  createRpsRoundElement(playerSelection, computerSelection, textualScore);
}

const rpsOptions = document.querySelectorAll(".rps-option");
for (let rpsOption of rpsOptions) {
  const id = rpsOption.id;
  const img = document.createElement("img");
  const imgSrc = getImgSrc(id);
  img.setAttribute("src", imgSrc);
  rpsOption.appendChild(img);
  rpsOption.addEventListener("click", playRound);
}
