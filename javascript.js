console.log("Hello World");

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            return rock;
        } else if (computerChoice === 1) {
            return paper;
        } else if (computerChoice === 2) {
            return scissors;
        }
    }

    function getHumanChoice() {
        let humanChoice = prompt("Please choose between rock, paper, and scissors:");
        if (humanChoice.toLowerCase() === "rock") {
            return rock;
        } else if (humanChoice.toLowerCase() === "paper") {
            return paper;
        } else if (humanChoice.toLowerCase() === "scissors") {
            return scissors;
        } else {
            alert("Invalid Choice! Please choose between rock, paper, and scissors.");
            return getHumanChoice();
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("You lost this round.");
            computerScore++;
        }
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    // Play 5 rounds
    console.log("Round 1:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 2:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 3:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 4:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 5:");
    playRound(getHumanChoice(), getComputerChoice());

    // Declare the winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a draw!");
    }
}

// Start the game
playGame();
