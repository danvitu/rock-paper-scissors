function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const computerChoice = Math.floor(Math.random() * choice.length);
  return choice[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Draw';
  }
  else if ((playerSelection === 'rock' && computerSelection === 'scissors')
   || (playerSelection === 'scissors' && computerSelection === 'paper')
   || (playerSelection === 'paper' && computerSelection === 'rock')) {
    return 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Win';
  }
  else {
    return 'Player choose: ' + playerSelection + '. Computer choose: '
     + computerSelection + '. Result is: ' + 'Lose';
  }
}

function game() {
  const playerSelection = prompt('Rock, Paper or Scissors: ').toLowerCase();
  if (playerSelection === 'rock'
   || playerSelection === 'paper'
   || playerSelection === 'scissors') {
  const computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
  } else {
  console.log('Incorrect value!');
  }
}

for (let i = 0; i < 5; i++) {
  console.log(game());
}