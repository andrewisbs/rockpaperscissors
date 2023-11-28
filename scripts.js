
const choice = document.querySelector("#choice");
const screenUpdate = document.querySelector("#results");
const tiesPara = document.createElement('p');
const tiesHeader =document.createElement('h3');
const humWinsPara = document.createElement('p');
const humWinsHeader =document.createElement('h3');
const compWinsPara = document.createElement('p');
const compWinsHeader =document.createElement('h3');
const roundNumber = document.createElement('h4');
const winnerAnnounce = document.createElement('h2');

const roundAnnouncement = document.createElement('h3');
//human wins...
//rounds...
let ties = 0;
let computerWins = 0;
let humanWins = 0;
let rounds = 0;

choice.addEventListener('click', (event) => {
    let target = event.target.textContent;
    round(target);
    updateScreen();
    declareWinner();
});

function round(choice) {
    let resultString = eachRound(choice,getComputerChoice());
    let scoreString = resultString.slice(0,3);
        if (scoreString == "Tie") {
            ties+=1;
        } else if (scoreString == "Sor"){
            computerWins +=1;   
        } else if (scoreString == "Con") {
            humanWins +=1;
        } else {
            //number+=1;
        }
        rounds++;
    }

function clearScreen() {
    screenUpdate.removeChild(tiesPara);
}

function updateScreen() {
while(screenUpdate.firstChild){
    screenUpdate.removeChild(screenUpdate.firstChild);
}
    console.log(ties, computerWins, humanWins, rounds);
//I need to create an 4 h3's, 

tiesHeader.textContent = 'Ties';
tiesPara.textContent = ties;
screenUpdate.appendChild(tiesHeader);
screenUpdate.appendChild(tiesPara);
compWinsHeader.textContent = 'Computer Wins';
compWinsPara.textContent = computerWins;
screenUpdate.appendChild(compWinsHeader);
screenUpdate.appendChild(compWinsPara);
humWinsHeader.textContent = 'Human Wins';
humWinsPara.textContent = humanWins;
screenUpdate.appendChild(humWinsHeader);
screenUpdate.appendChild(humWinsPara);
roundNumber.textContent = rounds;
roundAnnouncement.textContent = "Rounds:"
screenUpdate.appendChild(roundAnnouncement);
screenUpdate.appendChild(roundNumber);

   
}
function reset() {
    ties = 0;
    computerWins = 0;
    humanWins = 0;
    rounds = 0;
}
function declareWinner() {
    if(computerWins == 5 || humanWins ==5)
    {
        
        if (computerWins > humanWins) {
            winnerAnnounce.textContent = "YOU LOST"
            screenUpdate.appendChild(winnerAnnounce);
            reset();
        } else {
            winnerAnnounce.textContent = "YOU WON"
            screenUpdate.appendChild(winnerAnnounce);
            reset();
        }
        

    } else {winnerAnnounce.textContent = ""}
}

function eachRound(playerChoice, computerChoice) {
    let playerChoiceCleaned = playerChoice.toLowerCase();
    let returnString;
    if (playerChoiceCleaned==computerChoice) {
        returnString =  "Tie! " + playerChoiceCleaned + " and " +computerChoice + " are a tie!!!";
        return returnString;
    }
    switch (playerChoiceCleaned) {
        case 'rock':
            if (computerChoice == 'paper') {
                returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + ".";
                return returnString;
            } else {
                returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
                return returnString;
            }
        break;
        case 'paper':
            if (computerChoice == 'rock') {
                returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + "."
                return returnString;
        } else {
            returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
            return returnString;
        }
        break;
        case 'scissors':
        if (computerChoice == 'rock') {
            returnString = "Sorry, " + computerChoice + " beats " + playerChoiceCleaned + "."
                return returnString;
        } else {
            returnString = "Congrats! Because " + playerChoiceCleaned + " beats " + computerChoice + "!";
                return returnString;
        }
        break;
        default:
        return "You have to pick a proper one!!!";
        break;
    }
}

function getComputerChoice() {
    let randomNumber= Math.random();
    randomNumber = (Math.trunc(randomNumber*10))%3;
    //take the random number, make it into 0, 1, or 2, then
    //switch statement to switch to a string.
    let computerChoice;
    switch (randomNumber){
        case 0:
            computerChoice = 'paper';
            break;
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log("something horrible happened");
            break;
    }
    return computerChoice;
}