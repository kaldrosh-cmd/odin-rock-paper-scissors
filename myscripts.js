function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const random = getRandomInt(3);

    if (random === 0) {
        return "rock";
    }
    else if (random === 1) {
        return "paper";
    }
    else if (random === 2) {
        return "scissors";
    } 
}



function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("Tie!");
        return "tie";
    }
    else if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
            console.log("You lose rock beats scissors!");
            return "computer";
        } else {
            console.log("You win Paper beats rock!");
            return "player";
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "rock") {
            console.log("You lose paper beats rock!");
            return "computer";
        } else {
            console.log("You win scissors beat paper!");
            return "player";
        }
    }
    else if (computerChoice === "scissors") {
        if (playerChoice === "paper") {
            console.log("You lose scissors beat paper!");
            return "computer";
        } else {
            console.log("You win rock beats scissors!");
            return "player";
        }
    }
}










