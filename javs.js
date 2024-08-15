

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

function getHumanChoice() {
    return prompt("Rock or Paper or Scissor", "").toLocaleLowerCase();
}
function playGame() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Tie..You Both Choose  " + humanChoice)
    } else {
        console.log("You Loss! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

let humanScore = 0, computerScore = 0;

for (i = 0; i < 5; i++) {
    playGame();
}

console.log("Final Scores - Human: " + humanScore + ", Computer: " + computerScore);













