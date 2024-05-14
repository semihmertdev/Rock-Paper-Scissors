const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector("#results");
    let resultMessage;

    resultsDiv.innerHTML = `Player: ${humanChoice} - Computer: ${computerChoice}<br>`;

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "You win!";
        humanScore++;
    } else {
        resultMessage = "You lose!";
        computerScore++;
    }

    resultsDiv.innerHTML += resultMessage + `<br>Player: ${humanScore} - Computer: ${computerScore}<br>`;
    
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultMessage = "You win the game!";
        } else if (humanScore < computerScore) {
            resultMessage = "You lose the game!";
        } else {
            resultMessage = "It's a tie!";
        }
        resultsDiv.innerHTML += resultMessage;
        document.querySelectorAll("button").forEach(button => button.disabled = true);
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(event) {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
