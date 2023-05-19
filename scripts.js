//getComputerChoice 

//const ROCK = 1;
//const PAPER = 2;
// SCISSORS = 3;

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

function playRound(computerChoice) {

    let humanInput = prompt("Give me rock, paper, scissors");
    let humanInputUpper = humanInput.toUpperCase(humanInput);
    let humanNumber;
    switch(humanInputUpper) {
        case "ROCK":
            humanNumber = 1;
            break;

        case "PAPER":
            humanNumber = 2;
            break;

        case "SCISSORS":
            humanNumber = 3;
            break;
        
        default:
            humanNumber = 4;
            console.error("meaninglessness");
            break;
        
    }
    //compare that number to computer, and declare winner
    //toUpperCase()
    console.log(humanNumber);

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
