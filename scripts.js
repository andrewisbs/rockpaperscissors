



//next: I need a function that takes two variables 1 playerselction, 2 
//computer selection, and returns the winner. From the view of the 
//human. To start, I will hard code values, next I will use input
//needs to be case insensitive.


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