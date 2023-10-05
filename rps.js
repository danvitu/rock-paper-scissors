function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = Math.floor(Math.random() * choice.length);
  return choise[computerChoice];
}