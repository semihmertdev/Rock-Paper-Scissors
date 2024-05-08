const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(){
    let userChoice = prompt("Enter your choice: rock, paper or scissors").toLowerCase();

    while(!choices.includes(userChoice)){
        userChoice = prompt("Invalid choice. Please enter rock, paper or scissors").toLowerCase();
    }
    return userChoice;
}

function playRound(humanChoice, computerChoice){
    console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`);

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }else if(humanChoice === "rock" && computerChoice === "scissors" ||
             humanChoice === "paper" && computerChoice === "rock" ||
             humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win!");
        humanScore++;
    }else{
        console.log("You lose!");
        computerScore++;
    }

    console.log(`Player: ${humanScore} - Computer: ${computerScore}`);
}

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        return "You win the game!";
    }else if(humanScore < computerScore){
        return "You lose the game!";
    }else{
        return "It's a tie!";
    }
}

console.log(playGame());