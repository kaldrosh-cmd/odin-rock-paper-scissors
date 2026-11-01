const results = document.querySelector("#results")

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
        results.textContent = "Tie!";
        return "tie";
    }
    else if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
            results.textContent = "You lose rock beats scissors!";
            return "computer";
        } else {
            results.textContent = "You win Paper beats rock!";
            return "player";
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "rock") {
            results.textContent = "You lose paper beats rock!";
            return "computer";
        } else {
            results.textContent = "You win scissors beat paper!";
            return "player";
        }
    }
    else if (computerChoice === "scissors") {
        if (playerChoice === "paper") {
            results.textContent = "You lose scissors beat paper!";
            return "computer";
        } else {
            results.textContent = "You win rock beats scissors!";
            return "player";
        }
    }
}

const buttons = document.querySelectorAll('#rock, #paper, #scissors');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerChoice = e.target.id;
        playRound(getComputerChoice(), playerChoice);
    })
})









