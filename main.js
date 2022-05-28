let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = 'rock';
let playerChoice = 'rock';
const quote = 'You wanna get by me? There’s only two things stopping you. Fear and common sense.';

const buttons = document.querySelectorAll('.handButton');
const resetButton = document.querySelector('#reset');
const displayedPlayerScore = document.querySelector('#playerScore');
const displayedScoreBox = document.querySelector('.scoreBox');
const displayedGameResult = document.querySelector('#gameResult');
const displayedRound = document.querySelector('#round');
let playerButton = document.querySelector(`#${playerChoice}`);
let computerButton = document.querySelector(`#computer-${computerChoice}`);

displayedPlayerScore.textContent = quote;
displayedGameResult.textContent = ' - Steven Seagal';

function computerPlay() {
  const max = 3;
  const number = Math.floor(Math.random() * max);

  if (number === 0) {
    return 'rock';
  }

  return number === 1 ? 'paper' : 'scissors';
}

function resetButtonBorders() {
  playerButton.style.border = '3px solid rgb(38, 38, 38)';
  computerButton.style.border = '3px solid rgb(38, 38, 38)';
}

function resetResults() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
  displayedPlayerScore.textContent = quote;
  displayedGameResult.textContent = ' - Steven Seagal';
  displayedRound.textContent = '';
  displayedScoreBox.textContent = '0-0';
  buttons.forEach((button) => (button.disabled = false));
  resetButtonBorders();
}

function playRound(playerSelection, computerPlay) {
  displayedGameResult.textContent = '';

  resetButtonBorders();

  if (playerSelection === computerPlay) {
    return 0;
  }

  if (playerSelection === 'rock' && computerPlay === 'scissors') {
    return 1;
  }

  if (playerSelection === 'scissors' && computerPlay === 'paper') {
    return 1;
  }

  if (playerSelection === 'paper' && computerPlay === 'rock') {
    return 1;
  }

  return 2;
}

function changeButtonBorders(result) {
  if (result === 0) {
    playerButton.style.border = '3px solid orange';
    computerButton.style.border = '3px solid orange';
  }

  if (result === 1) {
    playerButton.style.border = '3px solid green';
    computerButton.style.border = '3px solid red';
  }

  if (result === 2) {
    playerButton.style.border = '3px solid red';
    computerButton.style.border = '3px solid green';
  }
}

function freeze() {
  buttons.forEach((button) => (button.disabled = true));
}

function game() {
  const roundResult = playRound(playerChoice, computerChoice);

  displayedRound.textContent = `Round #${roundNumber}`;
  roundNumber++;

  if (roundResult === 0) {
    displayedPlayerScore.textContent = `Draw. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1, computerChoice.length)} and ${playerChoice}.`;
    changeButtonBorders(0);
  }

  if (roundResult === 1) {
    playerScore++;
    displayedPlayerScore.textContent = `Won. ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1, playerChoice.length)} beats ${computerChoice}.`;
    changeButtonBorders(1);
  }

  if (roundResult === 2) {
    computerScore++;
    displayedPlayerScore.textContent = `Lost. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1, computerChoice.length)} beats ${playerChoice}.`;
    changeButtonBorders(2);
  }

  if (playerScore === 5) {
    displayedGameResult.textContent = 'You win the game. Steven sad :(';
    freeze();
  } else if (computerScore === 5) {
    displayedGameResult.textContent = 'You lost the game. Steven happy :)';
    freeze();
  }

  displayedScoreBox.textContent = `${playerScore}-${computerScore}`;
}

buttons.forEach((button) => button.addEventListener('click', () => {
  resetButtonBorders();
  playerChoice = button.id;
  computerChoice = computerPlay();

  playerButton = document.querySelector(`#${playerChoice}`);
  computerButton = document.querySelector(`#computer-${computerChoice}`);

  game();
}));

resetButton.addEventListener('click', resetResults);
