let humanScore  = 0;
let computerScore = 0;



function getComputerChoice() {
    const choiceList = ['rock', 'paper','scissors'];

    return choiceList[Math.floor(Math.random()*3)];

}

function getHumanChoice() {
    let humanChoice = (prompt('Enter your choose', '')).toLowerCase();
    return humanChoice;
    console.log(`You have chosen ${humanChoice}`);
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

    const resultsArray =[];

    i = 1;

    while(i  <= numOfRounds) {

        let humanChoice = getHumanChoice();
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

    return [resultsArray, humanScore, computerScore];
    
    };

