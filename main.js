let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = "";
let playerChoice = "";

let displayedPlayerScore = document.querySelector(`#playerScore`);
let displayedGameResult = document.querySelector(`#gameResult`);

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
  playerChoice = playerSelection;
  computerChoice = computerPlay;

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
   displayedPlayerScore.textContent = `Round #${roundNumber}: It's a draw. Your choice: ${computerChoice}, computer's choice: ${playerChoice}. Score: ${playerScore}:${computerScore}.`;
    roundNumber++;
    changeButtonBorders(0);
  } else if (roundResult == 1) {
    playerScore++;
    displayedPlayerScore.textContent = `Round #${roundNumber}: You win. Your choice - ${playerChoice}, beats computer's choice - ${computerChoice}. Score: ${playerScore}:${computerScore}.`;
    roundNumber++;
    changeButtonBorders(1);
  } else if (roundResult == 2) {
    computerScore++;
    displayedPlayerScore.textContent = `Round #${roundNumber}: You lose. Computer's choice - ${computerChoice}, beats your choice - ${playerChoice}. Score: ${playerScore}:${computerScore}.`;
    roundNumber++;
    changeButtonBorders(2);
  }

  if (playerScore == 5) {
    displayedGameResult.textContent = `You win the game. Score: ${playerScore}:${computerScore}.`;
    freeze();
  } else if (computerScore == 5) {
    displayedGameResult.textContent = `You lost the game. Score: ${playerScore}:${computerScore}.`;
    freeze();
  }
}

function resetResults() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
  displayedPlayerScore.textContent = "";
  displayedGameResult.textContent = "";
  buttons.forEach((button) => button.disabled = false);
}

function changeButtonBorders(result) {
    console.log(result);
    
    let playerButton  = document.querySelector(`#${playerChoice}`);
    let computerButton  = document.querySelector(`#computer${computerChoice}`);

    
    switch (result) {
        case 0:
            playerButton.style.border = "solid thick orange";
            computerButton.style.border = "solid thick orange";
    }

}

let buttons = document.querySelectorAll(".handButton");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  })
);

let resetButton = document.querySelector(`#reset`);
resetButton.addEventListener("click", resetResults);

function freeze() {
    buttons.forEach((button) => button.disabled = true);
}
