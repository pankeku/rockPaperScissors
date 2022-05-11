let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = "";
let playerChoice = "";

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
    console.log(
      `Round #${roundNumber}: It's a draw. Your choice: ${computerChoice}, computer's choice: ${playerChoice}. Score: ${playerScore}:${computerScore}.`
    );
    roundNumber++;
  } else if (roundResult == 1) {
    playerScore++;
    console.log(
      `Round #${roundNumber}: You win. Your choice - ${playerChoice}, beats computer's choice - ${computerChoice}. Score: ${playerScore}:${computerScore}.`
    );
    roundNumber++;
  } else if (roundResult == 2) {
    computerScore++;
    console.log(
      `Round #${roundNumber}: You lose. Computer's choice - ${computerChoice}, beats your choice - ${playerChoice}. Score: ${playerScore}:${computerScore}.`
    );
    roundNumber++;
  }

  if (playerScore == 5) {
    console.log(`You win the game. Score: ${playerScore}:${computerScore}.`);
    resetResults();
  } else if (computerScore == 5) {
    console.log(`You lost the game. Score: ${playerScore}:${computerScore}.`);
    resetResults();
  }
}

function resetResults() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
}

let buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  })
);
