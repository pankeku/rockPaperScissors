function computerPlay() {
    const max = 3;
    let number = Math.floor(Math.random() * max);
    console.log("*Random number: " + number);

    let play;

    switch (number) {
        case 0:
            play = "rock";
            break;
        case 1: 
            play = "paper";
            break;
        case 2:
            play = "scissors"
            break;
    }
    return play;
    }

function playerSelection() {
    let selection = "";

    while (selection !== "rock" && selection !== "paper" && selection !== "scissors") {
        selection = prompt("Rock, paper or scissors?").toLowerCase();
    }
    return selection;
}

function playRound(playerSelection, computerPlay) {

    if (playerSelection == computerPlay) {
        return 0;
    } else if (playerSelection == "rock" && computerPlay == "scissors") {
            return 1;
        } else if (playerSelection == "scissors" && computerPlay == "paper") {
            return 1;
         } else if (playerSelection == "paper" && computerPlay == "rock") {
             return 1;
         } else {
             return 2;
         }
        }


function game() {

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    
    while (playerScore < 5 && computerScore < 5) {

    
    let playerChoice = playerSelection();
    let computerChoice = computerPlay();

        if (playRound(playerChoice, computerChoice) == 0) {
            console.log(`Round #${roundNumber}: It's a draw. Your choice: ${computerChoice}, computer's choice: ${playerChoice}. Score: ${playerScore}:${computerScore}.`);
            roundNumber++;

        } else if (playRound(playerChoice, computerChoice) == 1) {
            playerScore++;
            console.log(`Round #${roundNumber}: You win. Your choice - ${playerChoice}, beats computer's choice - ${computerChoice}. Score: ${playerScore}:${computerScore}.`);
            roundNumber++;

        } else if (playRound(playerChoice, computerChoice) == 2) {
            computerScore++;
            console.log(`Round #${roundNumber}: You lose. Computer's choice - ${computerChoice}, beats your choice - ${playerChoice}. Score: ${playerScore}:${computerScore}.`);
            roundNumber++;
        };

        if (playerScore == 5) {
            console.log(`You win the game. Score: ${playerScore}:${computerScore}.`)
        } else if (computerScore == 5) {
            console.log(`You lost the game. Score: ${playerScore}:${computerScore}.`)
        }
    }

}