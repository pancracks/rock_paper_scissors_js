console.log("Hello World");
    const choices = document.querySelector("#choices");
    const scores = document.getElementById("scores");
    const msgPara = document.querySelector(".message");

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

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            msgPara.textContent = "Draw";
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            msgPara.textContent = "You win this round!";
            humanScore++;
        } else {
            msgPara.textContent = "You lost this round.";
            computerScore++;
        }
    }

    function playGame(e) {
        const humanChoice = e.target.value;
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        if (humanScore === 5 && computerScore < 5) {
            console.log("Congratulations! You won the game!");
        }
        else if (computerScore === 5 && humanScore < 5) {
            console.log("Sorry, you lost the game.");
        } 
        else {
            console.log("The game is a draw!");
            }
    }

    function updateScore(){
        const humanScorePara = document.querySelector("#playerScore")
        const computerScorePara = document.querySelector("#computerScore")

        humanScorePara.textContent =  `${humanScore}`;
        computerScorePara.textContent = `${computerScore}`;

    }

    choices.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            playGame(e)
            updateScore()
        }
    });
