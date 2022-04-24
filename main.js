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
    console.log("*Computer play: " + play)
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

    const win = `You win. Your choice - ${playerSelection}, beats computer's choice - ${computerPlay}.`;
    const lose = `You lose. Computer's choice - ${computerPlay}, beats your choice - ${playerSelection}.`
    const draw = `It's a draw. Your choice: ${computerPlay}, computer's choice: ${playerSelection}.`

    if (playerSelection == computerPlay) {
        return draw;
    } else if (playerSelection == "rock" && computerPlay == "scissors") {
            return win;
        } else if (playerSelection == "scissors" && computerPlay == "paper") {
            return win;
         } else if (playerSelection == "paper" && computerPlay == "rock") {
             return win;
         } else {
             return lose;
         }

        }


