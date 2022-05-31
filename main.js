let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = 'rock';
let playerChoice = 'rock';
const quote =
  'You wanna get by me? There’s only two things stopping you. Fear and common sense.';
const author = '- Steven Seagal';

const buttons = document.querySelectorAll('.buttons');
const resetButton = document.querySelector('.content__reset-button');
const displayedScoreBox = document.querySelector('.left-column__score');
const displayedRound = document.querySelector('.result__round');
const displayedPlayerScore = document.querySelector('.result__player-score');
const displayedGameResult = document.querySelector('.result__final-result');

displayedPlayerScore.textContent = quote;
displayedGameResult.textContent = author;

let playerButton = findRule(`.player-buttons__${playerChoice}--color`);
let computerButton = findRule(
  `.computer-buttons__${computerChoice}--color`
);

function findRule(className) {
  const rules = document.styleSheets[0].cssRules;
  let targetRule;

  for (i = 0; i < rules.length; i++) {
    if (rules[i].selectorText === className) {
      targetRule = rules[i];
      break;
    }
  }
  return targetRule;
}

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
    displayedPlayerScore.textContent = `Draw. ${
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1, computerChoice.length)
    } and ${playerChoice}.`;
    changeButtonBorders(0);
  }

  if (roundResult === 1) {
    playerScore++;
    displayedPlayerScore.textContent = `Won. ${
      playerChoice.charAt(0).toUpperCase() +
      playerChoice.slice(1, playerChoice.length)
    } beats ${computerChoice}.`;
    changeButtonBorders(1);
  }

  if (roundResult === 2) {
    computerScore++;
    displayedPlayerScore.textContent = `Lost. ${
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1, computerChoice.length)
    } beats ${playerChoice}.`;
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

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    resetButtonBorders();
    playerChoice = button.id;
    computerChoice = computerPlay();

    playerButton = findRule(`.player-buttons__${playerChoice}--color`);
    computerButton = findRule(
      `.computer-buttons__${computerChoice}--color`
    );

    game();
  })
);

resetButton.addEventListener('click', resetResults);
