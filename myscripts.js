const results = document.querySelector("#results");
const score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const random = getRandomInt(3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    results.textContent = "Tie!";
    return "tie";
  } else if (computerChoice === "rock") {
    if (playerChoice === "scissors") {
      results.textContent = "You lose rock beats scissors!";
      return "computer";
    } else {
      results.textContent = "You win Paper beats rock!";
      return "player";
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      results.textContent = "You lose paper beats rock!";
      return "computer";
    } else {
      results.textContent = "You win scissors beat paper!";
      return "player";
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "paper") {
      results.textContent = "You lose scissors beat paper!";
      return "computer";
    } else {
      results.textContent = "You win rock beats scissors!";
      return "player";
    }
  }
}

const buttons = document.querySelectorAll("#rock, #paper, #scissors");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    const winner = playRound(getComputerChoice(), playerChoice);
    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }

    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        results.textContent = "Player is a winner!";
      } else {
        results.textContent = "Computer is a winner!";
      }
      buttons.forEach((btn) => {
        btn.disabled = true;
      });
    }
  });
});
