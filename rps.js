function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const computerChoice = Math.floor(Math.random() * choice.length);
  return choice[computerChoice];
}

let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const result = document.createElement('div');
result.textContent = 'Pick one to start the game!';
container.appendChild(result);
const score = document.querySelector('#score');
const scores = document.createElement('div');
scores.textContent = playerScore + ' : ' + computerScore;
score.appendChild(scores);
const winner = document.createElement('div');

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Draw';
    container.appendChild(result);
    scores.textContent = playerScore + ' : ' + computerScore;
    score.appendChild(scores);

  } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
   || (playerSelection === 'scissors' && computerSelection === 'paper')
   || (playerSelection === 'paper' && computerSelection === 'rock')) {
    result.textContent = 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Win';
    container.appendChild(result);
    playerScore = ++playerScore;
    scores.textContent = playerScore + ' : ' + computerScore;
    score.appendChild(scores);

  } else {
    result.textContent = 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Lose';
    container.appendChild(result);
    computerScore = ++computerScore;
    scores.textContent = playerScore + ' : ' + computerScore;
    score.appendChild(scores);
  }
  winner.textContent = '';
  score.appendChild(winner);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore == 5 || computerScore == 5) {
      const win = (playerScore == 5) ? 'you' : 'computer';
      winner.textContent = 'Winner is ' + win;
      score.appendChild(winner);
      result.textContent = 'Pick one to start new game!';
      container.appendChild(result);
      playerScore = 0;
      computerScore = 0;
    }
  });
});