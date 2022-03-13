const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'Error, please type rock, paper, or scissors.';
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Oh man, you won!'
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
   if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'I win!';
      } else {
        return 'You win!';
      }
   }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'I win!';
    } else {
      return 'You win!';
    }
  }

 if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'I win!';
    } else {
      return 'You win!'
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('I threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
