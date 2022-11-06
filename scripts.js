class User { 
  constructor(isHuman) { 
  this.isHuman = isHuman; 
  this.wins = 0; 
  } 
} 

const userOne = new User(true);
const userTwo = new User(false);

let roundsPlayed = 0;

function getWinner(){
  return 0;
};

//main()


// buttons is a node list. It looks and acts much like an array.
const userSelectionButtons = document.querySelectorAll('button.selection');
const userOneDisplay = document.getElementById('user-one-selection');

userSelectionButtons.forEach( (button) => {
  button.addEventListener('click', playGame)
}
);

function playGame() {
  //backup in case user keeps trying to play
  if (roundsPlayed === 5) {
    return 0;
  }
  
  const userOneRoundSelection = this.id;
  console.log(userOneRoundSelection);
  
  
  
  
  //increment roundsPlayed
  roundsPlayed++;
  //update the div displaying rounds-played
  document.getElementById('rounds-played').innerText = roundsPlayed;
}


//set string variable roundWinner to tie
//set string variable roundComputerChoice to empty

//add click event listener to mark, tom, and travis buttons
//when mark, tom, or travis button is clicked, call function playRound()

//define playRound function()
  //if roundsPlayed === 5 return 0;
  //call getNumberFromButtonId() on this.id and store in variable userOneRoundSelection  

  //call randomChoice() function to get a random choice and store in variable userTwoRoundSelection

  //call displayComputerChoice() using userTwoRoundSelection to show user the computer's choice on the screen

  //call getRoundWinner() to determine round winner and store in variable roundWinner

  //call updateUserWins on roundWinner
    //if userOne had the win, update div#user-one-wins-display 
    //else update div#user-two-wins-display
  
  //increment roundsPlayed
  //update the div#rounds-played to the new value of roundsPlayed

  //check if roundsPlayed === 5 
  //if yes, 
    //display winner 
    //apply game-over class to div#winner

