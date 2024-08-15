

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

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Tie..You Both Choose" + humanChoice)
    } else {
        console.log("You Loss! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame(){

}


let answer, humanScore = 0, computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(humanScore+" "+computerScore);








