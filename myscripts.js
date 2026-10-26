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

function getPlayerChoice() {
    const playerChoice = prompt("Choose: rock, paper or scissors");

    if (!playerChoice) {
        alert("You Did not choose! Try Again.");
        return getPlayerChoice();
    }

    const formattedChoice = playerChoice.toLowerCase().trim();

    if (formattedChoice === "rock" || formattedChoice === "paper" || formattedChoice === "scissors") {
        return formattedChoice;
    }   else {
        alert("Wrong choice! Enter rock, paper or scissors.")
        return getPlayerChoice();
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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(` --- ROUND ${i} --- `);

        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        const roundResult = playRound(computerSelection, playerSelection);

        if (roundResult === "player") {
            playerScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }

        console.log(`Score -> Player: ${playerScore} | Computer: ${computerScore}`);
    }

    console.log("=== GAME OVER ===");
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won the game! Final score: ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost the game! Better luck next time. Final score ${playerScore}-${computerScore}`);
    } else {
        console.log(`It's a global tie! Final score: ${playerScore}-${computerScore}`);
    }
}

playGame();







