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

function randomChoice() {
  return 0;
}

function updateUserWins() {
  return 0;
}

function getRoundWinner() {
  return 0;
}

function playRound() {
  //backup in case user keeps trying to play
  if (roundsPlayed === 5) {
    return 0;
  }
  
  //call getNumberFromButtonId() on this.id and store in variable userOneRoundSelection  
  const userOneRoundSelection = getNumberFromButtonId(this.id);
  console.log(userOneRoundSelection);
  
  //call randomChoice() function to get a random choice and store in variable userTwoRoundSelection

  //call displayComputerChoice() using userTwoRoundSelection to show user the computer's choice on the screen

  //call getRoundWinner() to determine round winner and store in variable roundWinner

  //call updateUserWins() on roundWinner
    //if userOne had the win, update div#user-one-wins-display 
    //else update div#user-two-wins-display
  
  //increment roundsPlayed
  roundsPlayed++;
  //update the div displaying rounds-played
  document.getElementById('rounds-played').innerText = roundsPlayed;

  //check if roundsPlayed === 5 
  //if yes, 
    //display winner 
    //apply game-over class to div#winner
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



  

