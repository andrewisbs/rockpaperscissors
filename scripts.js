
//next, game() function
//inside, 5 rounds. Needs to keep score
//needs to declare a winner
//I think, just keep track of the first 3 letters
//Tie, Sor, Con, and count those

game(6);



function game(number) {

    let humanWins;
    let computerWins;
    
    for (0 ;number> 0;number-1){

        console.log("do something")
        
    }


}



function round(playerChoice, computerChoice) {
    let playerChoiceCleaned = playerChoice.toLowerCase();
    let returnString;
    if (playerChoiceCleaned==computerChoice) {
        returnString =  "Tie! " + playerChoiceCleaned + " and " +computerChoice + " are a tie!!!";
        return returnString;
    }
    switch (playerChoiceCleaned) {
        case "rock":
            if (computerChoice == "paper") {
                returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + ".";
                return returnString;
            } else {
                returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
                return returnString;
            }
        break;

        case "paper":
            if (computerChoice == "scissors") {
                returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + "."
                return returnString;
        } else {
            returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
            return returnString;
        }
        break;

        case "scissors":
        if (computerChoice == "rock") {
            returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + "."
                return returnString;
        } else {
            returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
                return returnString;
        }
        break;

        default:
        console.error("What???");
        break;


    }
    
}
//remove when I'm done, this is just to make sure it's working
console.log(round(prompt("Give me Rock, Paper, or Scissors!"),getComputerChoice()));








function getComputerChoice() {
    let randomNumber= Math.random();
    randomNumber = (Math.trunc(randomNumber*10))%3;
    //take the random number, make it into 0, 1, or 2, then
    //switch statement to switch to a string.
    let computerChoice;
    switch (randomNumber){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("something horrible happened");
            break;
    }
    return computerChoice;
}