

function getComputerChoice() {
    let result = Math.floor(Math.random() * (4 - 2 + 1) + 2);
    let answer;
    if (result === 2) {
        answer = "rock";
    } else if (result === 3) {
        answer = "paper";
    } else if (result === 4) {
        answer = "scissor";
    } else {
        alert("Something Wrong with this code!");
    }
    return answer;
}

function playGame() {

    if (humanScore === 5 || computerScore === 5) {
        resultH1.textContent = "Final Scores - Human: " + humanScore + ", Computer: " + computerScore;
        if (humanScore === 5) {
            resultH2.textContent = "You Win";
        } else {
            resultH2.textContent = "You Loss";
        }
        rocco.disabled = true;
        paperboy.disabled = true;
        scissorToy.disabled = true;
        restartBtn.style.display = "block";
        return;
    }


    let humanChoice = userChoice;
    let computerChoice = getComputerChoice();
    computer.textContent = "Computer Choose " + computerChoice;
    if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        // console.log("You win! " + humanChoice + " beats " + computerChoice);
        resultH1.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        // console.log("Tie..You Both Choose  " + humanChoice)
        resultH1.textContent = "Tie..You Both Choose  " + humanChoice;
    } else {
        // console.log("You Loss! " + computerChoice + " beats " + humanChoice);
        resultH1.textContent = "You Loss! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    userScore.textContent = humanScore;
    systemScore.textContent = computerScore;
}


function restartGame() {
    humanScore = 0;
    computerScore = 0;
    userChoice = null;
    user.textContent = "";
    computer.textContent = "";
    resultH1.textContent = "";
    resultH2.textContent = "";
    userScore.textContent = "Make";
    systemScore.textContent = "Choice";

    // Re-enable the buttons
    rocco.disabled = false;
    paperboy.disabled = false;
    scissorToy.disabled = false;

    // Hide the Restart button
    restartBtn.style.display = "none";
}


let humanScore = 0, computerScore = 0, userChoice;

const rocco = document.querySelector(".rockbtn");
const paperboy = document.querySelector(".paperbtn");
const scissorToy = document.querySelector(".scissorbtn");
const resultH1 = document.querySelector(".resulth1");
const resultH2 = document.querySelector(".resulth2");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const userScore = document.querySelector(".userscore");
const systemScore = document.querySelector(".computerscore");
const restartBtn = document.querySelector(".resett");


rocco.addEventListener("click", () => {
    userChoice = "rock";
    user.textContent = "You Choose ROCK";
    playGame();
});

paperboy.addEventListener("click", () => {
    userChoice = "paper";
    user.textContent = "You Choose PAPER";
    playGame();
});

scissorToy.addEventListener("click", () => {
    userChoice = "scissor";
    user.textContent = "You Choose SCISSOR";
    playGame();
});

// Attach the restart function to the restart button
restartBtn.addEventListener("click", restartGame);
















