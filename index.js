let humanScore  = 0;
let computerScore = 0;
const resultsArray =[];
let numOfRoundsPlayed = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let results = document.querySelector(".results")
results.setAttribute('style', 'white-space: pre;');
let humanChoice = 'rock';

rock.addEventListener('click', () => {
    humanChoice = 'rock';
    playGame(5);
    
})

paper.addEventListener('click', () => {
    humanChoice = 'paper';
    playGame(5);
})

scissors.addEventListener('click', () => 
{
    humanChoice = 'scissors';
    playGame(5);
})


function getComputerChoice() {

    const choiceList = ['rock', 'paper','scissors'];
    return choiceList[Math.floor(Math.random()*3)];

}


function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log('no one won ! a tie happened');
            return 2;
        } else if (humanChoice === 'rock' && computerChoice ==='scissors') {
            return 1;
            console.log('you won! rock beats scissors!');
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            return 1;
            console.log('You won! paper beats rock!');
        } else if (humanChoice === 'scissors' && computerChoice==='paper'){
            return 1;
            console.log('You won! scissors beats paper!');
        } else {
            return 0;
            console.log('computer won!'); 
        }
};

function playGame(numOfRounds) {

    

    i = 1;

    while(i  < numOfRounds) {

        numOfRoundsPlayed +=i;

        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result===0) {
                computerScore++;
                resultsArray.push('lose');
            } else if  (result===1) {
                humanScore++;
                resultsArray.push('win');
            }  else if (result===2)  {
                resultsArray.push('tie');
            }          
             
        i++;

        }

    numOfRoundsPlayed +=5;

    results.textContent = ` total rounds played : ${numOfRoundsPlayed} \r\n the computer score is : ${computerScore} \r\n the human score is : ${humanScore} \r\n and the array of results is: ${resultsArray}` ;
        
    
    };

