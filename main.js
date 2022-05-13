let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = "rock";
let playerChoice = "rock";
const quote = `You wanna get by me? There’s only two things stopping you. Fear and common sense.`;

let buttons = document.querySelectorAll(".handButton");
let resetButton = document.querySelector(`#reset`);
let displayedPlayerScore = document.querySelector(`#playerScore`);
let displayedScoreBox = document.querySelector(`.scoreBox`);
let displayedGameResult = document.querySelector(`#gameResult`);
let displayedRound = document.querySelector(`#round`);
let playerButton = document.querySelector(`#${playerChoice}`);
let computerButton = document.querySelector(`#computer-${computerChoice}`);

displayedPlayerScore.textContent = quote;
displayedGameResult.textContent = " - Steven Seagal";

function computerPlay() {
  const max = 3;
  let number = Math.floor(Math.random() * max);

  let play;

  switch (number) {
    case 0:
      play = "rock";
      break;
    case 1:
      play = "paper";
      break;
    case 2:
      play = "scissors";
      break;
  }
  return play;
}

function playRound(playerSelection, computerPlay) {

  displayedGameResult.textContent = "";
  resetButtonBorders();

  // draw
  if (playerSelection == computerPlay) {
    game(0);
    //all player's winning combinations
  } else if (playerSelection == "rock" && computerPlay == "scissors") {
    game(1);
  } else if (playerSelection == "scissors" && computerPlay == "paper") {
    game(1);
  } else if (playerSelection == "paper" && computerPlay == "rock") {
    game(1);
    //else combinations are lost
  } else {
    game(2);
  }
}

function game(roundResult) {
  if (roundResult == 0) {
    displayedRound.textContent = `Round #${roundNumber}`;
    displayedPlayerScore.textContent = `Draw. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1, computerChoice.length)} and ${playerChoice}.`;
    displayedScoreBox.textContent = `${playerScore}-${computerScore}`;
    roundNumber++;
    changeButtonBorders(0);
    
  } else if (roundResult == 1) {
    displayedRound.textContent = `Round #${roundNumber}`;
    playerScore++;
    displayedPlayerScore.textContent = `Won. ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1, playerChoice.length)} beats ${computerChoice}.`;
    displayedScoreBox.textContent = `${playerScore}-${computerScore}`;
    roundNumber++;
    changeButtonBorders(1);
  } else if (roundResult == 2) {
    displayedRound.textContent = `Round #${roundNumber}`;
    computerScore++;
    displayedPlayerScore.textContent = `Lost. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1, computerChoice.length)} beats ${playerChoice}.`;
    displayedScoreBox.textContent = `${playerScore}-${computerScore}`;
    roundNumber++;
    changeButtonBorders(2);
  }

  if (playerScore == 5) {
    displayedGameResult.textContent = `You win the game. Steven sad :(`;
    freeze();
  } else if (computerScore == 5) {
    displayedGameResult.textContent = `You lost the game. Steven happy :)`;
    freeze();
  }
}

function resetResults() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
  displayedPlayerScore.textContent = quote;
  displayedGameResult.textContent = " - Steven Seagal";
  displayedRound.textContent = "";
  displayedScoreBox.textContent = "0-0";
  buttons.forEach((button) => (button.disabled = false));
  resetButtonBorders();
}

function changeButtonBorders(result) {
  switch (result) {
    case 0:
      playerButton.style.border = "3px solid orange";
      computerButton.style.border = "3px solid orange";
      break;
    case 1:
      playerButton.style.border = "3px solid green";
      computerButton.style.border = "3px solid red";
      break;
    case 2:
      playerButton.style.border = "3px solid red";
      computerButton.style.border = "3px solid green";
      break;
  }
}

function resetButtonBorders() {
  playerButton.style.border = "3px solid rgb(38, 38, 38)";
  computerButton.style.border = "3px solid rgb(38, 38, 38)";
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    resetButtonBorders();
    playerChoice = button.id;
    computerChoice = computerPlay();
    playerButton = document.querySelector(`#${playerChoice}`);
    computerButton = document.querySelector(`#computer-${computerChoice}`);

    playRound(playerChoice, computerChoice);
  })
);

resetButton.addEventListener("click", resetResults);

function freeze() {
  buttons.forEach((button) => (button.disabled = true));
}
