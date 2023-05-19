//getComputerChoice 

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getComputerChoice() {
    //This function will Randomly return a value of “rock” “paper” or “scissors”
    //aka 1, 2, 3
    let computerChoice = randomNumber();
    return computerChoice;
}

function randomNumber() {
    let start = Math.random() * 10;
    start = Math.trunc(start);
    let end = (start % 3) +1;
    return end;
}

console.log(getComputerChoice());

function playRound(computerChoice) {

    let humanChoice = prompt("Give me rock, paper, scissors");
    console.log(humanChoice);

}

playRound(getComputerChoice());

//play a round
//getHumanChoice
//getComputerChoice
//return Winner, save in ‘Winner’ variable
//mention Winner
//increment score
//display score
//repeat 5 times
