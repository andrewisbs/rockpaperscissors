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
    //play a round
    //getHumanChoice
    //getComputerChoice
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
    let winner;
    switch (humanNumber) {

        case 1:
            if (computerChoice === 2) {
                winner = "Computer"; }
                else if (computerChoice ===3) {
                    winner = "Human";}
               else {winner = "Draw";}
            
            break;
        case 2:
            if (computerChoice === 3) {
                winner = "Computer"; }
                else if (computerChoice ===1) {
                    winner = "Human";}
               else {winner = "Draw";}    
            break;

        case 3:
                if (computerChoice === 1) {
                    winner = "Computer"; }
                else if (computerChoice ===2) {
                    winner = "Human";}
               else {winner = "Draw";}            
            break;

        case 4:
            console.log("you messed up");
            break;

        default:
            console.log("hum");
            break;


    }
    //compare that number to computer, and declare winner
    console.log(winner);
    console.log("The computer is at ", computerChoice);
    console.log("The human is at ", humanNumber);
    console.log("1=Rock, 2= Paper, 3=Scissors");


    return winner;
}


let winsHuman;
let winsComputer;
let totalGames = 0;

while (totalGames<6) {

}
playRound(getComputerChoice());


//return Winner, save in ‘Winner’ variable
//mention Winner
//increment score
//display score
//repeat 5 times
