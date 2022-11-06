class User { 
  constructor(isHuman) { 
  this.isHuman = isHuman; 
  this.wins = 0; 
  } 
} 

const userOne = new User(true);
const userTwo = new User(false);

let roundsPlayed = 0;

function getNumberFromButtonId(buttonId) {
  let userChoice;
  switch (buttonId) {
    case 'mark':
      userChoice = 0; 
      break
    case 'tom':
      userChoice = 1;
      break
    case 'travis':
      userChoice = 2;
      break
    default:
      userChoice = -1;
  }
  return userChoice;
}

function getRandomChoice() {
  return Math.floor(Math.random() * 3);
}

function displayComputerChoice(userTwoRoundSelection) {
  
  let newId = '';

  switch (userTwoRoundSelection) {
    case 0:
      newId = 'mark';
      break
    case 1:
      newId = 'tom';
      break
    case 2:
      newId = 'travis';
      break
    default:
      newId = '';
  }

  const computerSelectionButton = document.getElementsByClassName('selection-computer')[0];

  computerSelectionButton.id = newId;
  computerSelectionButton.innerText = newId.toUpperCase();
}

function getRoundWinner(userOneChoice,userTwoChoice) {

  if (Math.abs(userOneChoice) > 2 || Math.abs(userTwoChoice) > 2) {
    return -1;
  }

  const scoreDifference = userOneChoice - userTwoChoice;
  
  if (scoreDifference === 0) {
    // if tie
    return 0;
  } else if (scoreDifference === -2 || scoreDifference === 1) {
    // userOne wins
    return 1;
  } else {
    // userTwo wins
    return 2;
  }
}

function updateUserWins(roundWinner) {
  if (roundWinner === 1) {
    userOne.wins++;
    //increment roundsPlayed
    roundsPlayed++;
    //if userOne had the win, update div#user-one-wins-display
    const userOneDisplay = document.getElementById('user-one-wins-display')
    userOneDisplay.innerText = userOne.wins; 
  } else if (roundWinner === 2) {
    userTwo.wins++;
    //increment roundsPlayed
    roundsPlayed++;
    //if userTwo had the win, update div#user-two-wins-display
    const userTwoDisplay = document.getElementById('user-two-wins-display')
    userTwoDisplay.innerText = userTwo.wins;
  } else if (roundWinner < 0) {
    console.log(`Invalid argument provided: ${roundWinner}\nExpecting either number 0 (tie), 1 (userOne wins), or 2 (computer wins).`);
  }
}

function getWinnerOverall() {
  if ( userOne.wins === userTwo.wins) {
    return 'It\'s a tie!';
  } else if ( userOne.wins > userTwo.wins ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function playRound() {
  //backup in case user keeps trying to play
  if (roundsPlayed === 5) {
    return 0;
  }
  
  //call getNumberFromButtonId() on this.id and store in variable userOneRoundSelection  
  const userOneRoundSelection = getNumberFromButtonId(this.id);
  
  //call getRandomChoice() function to get a random choice and store in variable userTwoRoundSelection 
  userTwoRoundSelection = getRandomChoice();

  //call displayComputerChoice() using userTwoRoundSelection to show user the computer's choice on the screen
  displayComputerChoice(userTwoRoundSelection);

  //call getRoundWinner() to determine round winner and store in variable roundWinner
  roundWinner = getRoundWinner(userOneRoundSelection,userTwoRoundSelection);

  //call updateUserWins() on roundWinner
  updateUserWins(roundWinner);
  console.log(userOne);
  console.log(userTwo);
  

  //update the div displaying rounds-played
  document.getElementById('rounds-played').innerText = roundsPlayed;

  if (roundsPlayed === 5) {
    const divForWinner = document.getElementById('winner');
    const result = getWinnerOverall();
    divForWinner.innerText = result; 
    //apply game-over class to div#winner
    divForWinner.className += ' game-over';
  } 
}

//main()...

// buttons is a node list. It looks and acts much like an array.
const userSelectionButtons = document.querySelectorAll('button.selection');
const userOneDisplay = document.getElementById('user-one-selection');

//add click event listener to mark, tom, and travis buttons
//when mark, tom, or travis button is clicked, call function playRound()
userSelectionButtons.forEach( (button) => {
  button.addEventListener('click', playRound)
});



  

