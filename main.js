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
    console.log("*play: " + play)
    return play;

    }

function playerSelection() {
    let selection = "";

    while (selection !== "rock" && selection !== "paper" && selection !== "scissors") {
        selection = prompt("Rock, paper or scissors?").toLowerCase();
    }
    return selection;
}


