

function getComputerChoice(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}


let answer, result = getComputerChoice(2, 4);
console.log(result);

if (result === 2) {
    answer = "Rock";
} else if (result === 3) {
    answer = "Papper";
} else if (result === 4) {
    answer = "Scissor";
} else {
    alert("Somthing Wrong with this code!");
}


alert(answer);